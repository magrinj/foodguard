import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecipesService } from '../recipes/recipes.service';
import { Comment, CommentCreateInput } from '../generated';

@Injectable()
export class CommentsService {
  private readonly logger = new Logger(CommentsService.name);

  constructor(
    private prisma: PrismaService,
    private recipesService: RecipesService,
  ) {}

  /**
   * Create a new comment
   * @param content The content of the comment
   * @param authorId The ID of the user who created the comment
   * @param recipeId The ID of the recipe the comment is on (optional)
   * @param placeId The ID of the place the comment is on (optional)
   * @returns The created comment
   */
  async create(
    content: string,
    authorId: string,
    recipeId?: string,
    placeId?: string,
  ): Promise<Comment> {
    const commentData: CommentCreateInput = {
      content,
      author: {
        connect: { id: authorId },
      },
    };

    if (recipeId) {
      commentData.recipe = {
        connect: { id: recipeId },
      };
    }

    if (placeId) {
      commentData.place = {
        connect: { id: placeId },
      };
    }

    const comment = await this.prisma.comment.create({
      data: commentData,
      include: {
        author: true,
      },
    });

    // If this is a comment on an AI-generated recipe, handle it specially
    if (recipeId) {
      const recipe = await this.prisma.recipe.findUnique({
        where: { id: recipeId },
      });

      if (recipe?.isAIGenerated) {
        // Process the comment asynchronously
        this.handleAIRecipeComment(recipeId, comment.id).catch(error => {
          this.logger.error(`Error handling AI recipe comment: ${error.message}`, error.stack);
        });
      }
    }

    return comment;
  }

  /**
   * Handle a comment on an AI-generated recipe
   * This will generate an AI response and update the recipe based on the feedback
   * @param recipeId The ID of the recipe
   * @param commentId The ID of the comment
   */
  private async handleAIRecipeComment(recipeId: string, commentId: string) {
    await this.recipesService.handleAIRecipeComment(recipeId, commentId);
  }

  /**
   * Find all comments for a recipe
   * @param recipeId The ID of the recipe
   * @returns The comments for the recipe
   */
  async findByRecipe(recipeId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { recipeId },
      include: {
        author: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  /**
   * Find all comments for a place
   * @param placeId The ID of the place
   * @returns The comments for the place
   */
  async findByPlace(placeId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { placeId },
      include: {
        author: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  /**
   * Find all comments by an author
   * @param authorId The ID of the author
   * @returns The comments by the author
   */
  async findByAuthor(authorId: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: { authorId },
      include: {
        author: true,
        recipe: true,
        place: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  /**
   * Remove a comment
   * @param id The ID of the comment
   * @param authorId The ID of the author (for authorization)
   * @returns The removed comment
   */
  async remove(id: string, authorId: string): Promise<Comment> {
    // Check if the comment exists and belongs to the author
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: { author: true },
    });

    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }

    if (comment.authorId !== authorId) {
      throw new Error('You can only delete your own comments');
    }

    return this.prisma.comment.delete({
      where: { id },
      include: {
        author: true,
      },
    });
  }
} 