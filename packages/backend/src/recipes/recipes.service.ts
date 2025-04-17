import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { Recipe, Tag, Allergen, DietaryTag, Comment } from '@prisma/client';
import { OpenAIService, GeneratedRecipe } from '../ai/openai.service';
import { Cron, CronExpression } from '@nestjs/schedule';

// System user ID for AI-generated content
const SYSTEM_USER_ID = 'system';

@Injectable()
export class RecipesService {
  private readonly logger = new Logger(RecipesService.name);

  constructor(
    private prisma: PrismaService,
    private openAIService: OpenAIService,
  ) {}

  async create(createRecipeInput: CreateRecipeInput, authorId: string): Promise<Recipe> {
    const { tagIds, allergenIds, dietaryTagIds, ...recipeData } = createRecipeInput;

    return this.prisma.recipe.create({
      data: {
        ...recipeData,
        author: {
          connect: { id: authorId },
        },
        ...(tagIds && {
          tags: {
            connect: tagIds.map(id => ({ id })),
          },
        }),
        ...(allergenIds && {
          allergens: {
            connect: allergenIds.map(id => ({ id })),
          },
        }),
        ...(dietaryTagIds && {
          dietaryTags: {
            connect: dietaryTagIds.map(id => ({ id })),
          },
        }),
      },
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
    });
  }

  async findAll(skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
        comments: {
          include: {
            author: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        votes: true,
      },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }

  async update(id: string, updateRecipeInput: UpdateRecipeInput) {
    const { tagIds, allergenIds, dietaryTagIds, ...recipeData } = updateRecipeInput;

    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return this.prisma.recipe.update({
      where: { id },
      data: {
        ...recipeData,
        ...(tagIds && {
          tags: {
            set: tagIds.map(id => ({ id })),
          },
        }),
        ...(allergenIds && {
          allergens: {
            set: allergenIds.map(id => ({ id })),
          },
        }),
        ...(dietaryTagIds && {
          dietaryTags: {
            set: dietaryTagIds.map(id => ({ id })),
          },
        }),
      },
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
    });
  }

  async remove(id: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return this.prisma.recipe.delete({
      where: { id },
    });
  }

  async search(query: string, skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { ingredients: { hasSome: [query] } },
        ],
      },
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByAuthor(authorId: string, skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      where: { authorId },
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByTag(tagId: string, skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      where: {
        tags: {
          some: {
            id: tagId,
          },
        },
      },
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByAllergen(allergenId: string, skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      where: {
        allergens: {
          some: {
            id: allergenId,
          },
        },
      },
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findByDietaryTag(dietaryTagId: string, skip?: number, take?: number) {
    return this.prisma.recipe.findMany({
      where: {
        dietaryTags: {
          some: {
            id: dietaryTagId,
          },
        },
      },
      skip,
      take,
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async generateAIRecipe(userId: string, feedback?: string): Promise<Recipe> {
    try {
      const recipeData: GeneratedRecipe = await this.openAIService.generateRecipe(feedback);
      
      // Create the recipe with proper typing for tags, allergens, and dietary tags
      const recipe = await this.prisma.recipe.create({
        data: {
          title: recipeData.title,
          description: recipeData.description,
          ingredients: recipeData.ingredients,
          instructions: recipeData.instructions,
          prepTime: recipeData.prepTime,
          cookTime: recipeData.cookTime,
          servings: recipeData.servings,
          difficulty: recipeData.difficulty,
          isAIGenerated: true,
          author: {
            connect: { id: userId }
          },
          tags: {
            connectOrCreate: recipeData.suggestedTags.map((tag: string) => ({
              where: { name: tag },
              create: { name: tag, type: 'CUISINE' }
            }))
          },
          allergens: {
            connectOrCreate: recipeData.suggestedAllergens.map((allergen: string) => ({
              where: { name: allergen },
              create: { name: allergen }
            }))
          },
          dietaryTags: {
            connectOrCreate: recipeData.suggestedDietaryTags.map((tag: string) => ({
              where: { name: tag },
              create: { name: tag }
            }))
          }
        },
        include: {
          tags: true,
          allergens: true,
          dietaryTags: true,
          author: true
        }
      });

      return recipe;
    } catch (error) {
      this.logger.error('Error generating AI recipe:', error);
      throw error;
    }
  }

  async getDailyAIRecipe() {
    // Get the most recent AI-generated recipe
    const recipe = await this.prisma.recipe.findFirst({
      where: { isAIGenerated: true },
      orderBy: { createdAt: 'desc' },
      include: {
        author: true,
        tags: true,
        allergens: true,
        dietaryTags: true,
      },
    });

    // If no recipe exists or the last one is older than 24 hours, generate a new one
    if (!recipe || this.isOlderThan24Hours(recipe.createdAt)) {
      return this.generateAIRecipe(SYSTEM_USER_ID);
    }

    return recipe;
  }

  private isOlderThan24Hours(date: Date): boolean {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    return diffInHours >= 24;
  }

  /**
   * Cron job to generate a new recipe of the day every day at midnight
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async generateDailyRecipe() {
    this.logger.log('Generating daily AI recipe');
    try {
      // Generate a new recipe
      await this.generateAIRecipe(SYSTEM_USER_ID);
      
      // Clean up old AI recipes without positive feedback
      await this.cleanupOldAIRecipes();
    } catch (error) {
      this.logger.error('Error in daily recipe generation cron job:', error);
    }
  }

  /**
   * Clean up old AI recipes that don't have positive feedback
   */
  private async cleanupOldAIRecipes() {
    try {
      // Find AI recipes older than 7 days
      const oldRecipes = await this.prisma.recipe.findMany({
        where: {
          isAIGenerated: true,
          createdAt: {
            lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
          },
        },
        include: {
          votes: true,
        },
      });

      // Delete recipes without positive votes
      for (const recipe of oldRecipes) {
        const hasPositiveVotes = recipe.votes.some(vote => vote.value > 0);
        if (!hasPositiveVotes) {
          this.logger.log(`Deleting old AI recipe without positive feedback: ${recipe.id}`);
          await this.prisma.recipe.delete({
            where: { id: recipe.id },
          });
        }
      }
    } catch (error) {
      this.logger.error('Error cleaning up old AI recipes:', error);
    }
  }

  /**
   * Handle a new comment on an AI-generated recipe
   * This will generate an AI response and update the recipe based on the feedback
   */
  async handleAIRecipeComment(recipeId: string, commentId: string) {
    try {
      // Get the recipe and comment
      const recipe = await this.prisma.recipe.findUnique({
        where: { id: recipeId },
        include: {
          comments: {
            where: { id: commentId },
            include: { author: true },
          },
        },
      });

      if (!recipe || !recipe.isAIGenerated || recipe.comments.length === 0) {
        return;
      }

      const comment = recipe.comments[0];
      
      // Generate AI response to the comment
      const aiResponse = await this.openAIService.generateRecipeResponse(comment.content);
      
      // Create an AI response comment
      await this.prisma.comment.create({
        data: {
          content: aiResponse,
          author: {
            connect: { id: SYSTEM_USER_ID },
          },
          recipe: {
            connect: { id: recipeId },
          },
        },
      });
      
      // Update the recipe based on the feedback
      await this.generateAIRecipe(SYSTEM_USER_ID, comment.content);
      
      this.logger.log(`AI recipe ${recipeId} updated based on user feedback`);
    } catch (error) {
      this.logger.error(`Error handling AI recipe comment: ${error.message}`, error.stack);
    }
  }
} 