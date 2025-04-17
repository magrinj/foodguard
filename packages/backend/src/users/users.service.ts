import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, SavedRecipe, SavedPlace } from '../generated';
import { UserEntity } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(skip?: number, take?: number): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
      include: {
        allergens: true,
        dietaryTags: true,
        recipes: true,
        places: true,
        comments: true,
        votes: true,
        savedRecipes: {
          include: {
            recipe: true,
          },
        },
        savedPlaces: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        allergens: true,
        dietaryTags: true,
        recipes: true,
        places: true,
        comments: true,
        votes: true,
        savedRecipes: {
          include: {
            recipe: true,
          },
        },
        savedPlaces: {
          include: {
            place: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(updateUserInput: UpdateUserInput, currentUser: UserEntity): Promise<User> {
    const { id, ...userData } = updateUserInput;
    
    // Users can only update their own profile
    if (id !== currentUser.id) {
      throw new ForbiddenException('You can only update your own profile');
    }
    
    return this.prisma.user.update({
      where: { id },
      data: userData,
      include: {
        allergens: true,
        dietaryTags: true,
        recipes: true,
        places: true,
        comments: true,
        votes: true,
        savedRecipes: {
          include: {
            recipe: true,
          },
        },
        savedPlaces: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async getSavedRecipes(userId: string, skip?: number, take?: number): Promise<SavedRecipe[]> {
    return this.prisma.savedRecipe.findMany({
      where: { userId },
      skip,
      take,
      include: {
        recipe: true,
        user: true,
      },
      orderBy: {
        savedAt: 'desc',
      },
    });
  }

  async getSavedPlaces(userId: string, skip?: number, take?: number): Promise<SavedPlace[]> {
    return this.prisma.savedPlace.findMany({
      where: { userId },
      skip,
      take,
      include: {
        place: true,
        user: true,
      },
      orderBy: {
        savedAt: 'desc',
      },
    });
  }

  async saveRecipe(recipeId: string, user: UserEntity): Promise<SavedRecipe> {
    // Check if recipe exists
    const recipe = await this.prisma.recipe.findUnique({
      where: { id: recipeId },
    });
    
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${recipeId} not found`);
    }
    
    // Check if already saved
    const existingSavedRecipe = await this.prisma.savedRecipe.findFirst({
      where: {
        userId: user.id,
        recipeId,
      },
    });
    
    if (existingSavedRecipe) {
      return existingSavedRecipe;
    }
    
    // Create saved recipe
    return this.prisma.savedRecipe.create({
      data: {
        userId: user.id,
        recipeId,
      },
      include: {
        recipe: true,
        user: true,
      },
    });
  }

  async unsaveRecipe(recipeId: string, user: UserEntity): Promise<boolean> {
    const result = await this.prisma.savedRecipe.deleteMany({
      where: {
        userId: user.id,
        recipeId,
      },
    });
    
    return result.count > 0;
  }

  async savePlace(placeId: string, user: UserEntity): Promise<SavedPlace> {
    // Check if place exists
    const place = await this.prisma.place.findUnique({
      where: { id: placeId },
    });
    
    if (!place) {
      throw new NotFoundException(`Place with ID ${placeId} not found`);
    }
    
    // Check if already saved
    const existingSavedPlace = await this.prisma.savedPlace.findFirst({
      where: {
        userId: user.id,
        placeId,
      },
    });
    
    if (existingSavedPlace) {
      return existingSavedPlace;
    }
    
    // Create saved place
    return this.prisma.savedPlace.create({
      data: {
        userId: user.id,
        placeId,
      },
      include: {
        place: true,
        user: true,
      },
    });
  }

  async unsavePlace(placeId: string, user: UserEntity): Promise<boolean> {
    const result = await this.prisma.savedPlace.deleteMany({
      where: {
        userId: user.id,
        placeId,
      },
    });
    
    return result.count > 0;
  }

  async updateAllergens(allergenIds: string[], user: UserEntity): Promise<User> {
    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        allergens: {
          set: allergenIds.map(id => ({ id })),
        },
      },
      include: {
        allergens: true,
        dietaryTags: true,
        recipes: true,
        places: true,
        comments: true,
        votes: true,
        savedRecipes: {
          include: {
            recipe: true,
          },
        },
        savedPlaces: {
          include: {
            place: true,
          },
        },
      },
    });
  }

  async updateDietaryTags(dietaryTagIds: string[], user: UserEntity): Promise<User> {
    return this.prisma.user.update({
      where: { id: user.id },
      data: {
        dietaryTags: {
          set: dietaryTagIds.map(id => ({ id })),
        },
      },
      include: {
        allergens: true,
        dietaryTags: true,
        recipes: true,
        places: true,
        comments: true,
        votes: true,
        savedRecipes: {
          include: {
            recipe: true,
          },
        },
        savedPlaces: {
          include: {
            place: true,
          },
        },
      },
    });
  }
} 