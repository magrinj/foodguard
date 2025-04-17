import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './models/recipe.model';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from '../generated';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Mutation(() => Recipe)
  @UseGuards(JwtAuthGuard)
  async createRecipe(
    @Args('createRecipeInput') createRecipeInput: CreateRecipeInput,
    @CurrentUser() user: User,
  ) {
    return this.recipesService.create(createRecipeInput, user.id);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  async findAll(
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.findAll(skip, take);
  }

  @Query(() => Recipe, { name: 'recipe' })
  async findOne(@Args('id') id: string) {
    return this.recipesService.findOne(id);
  }

  @Query(() => Recipe, { name: 'recipeOfTheDay' })
  async getRecipeOfTheDay() {
    return this.recipesService.getDailyAIRecipe();
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtAuthGuard)
  async updateRecipe(
    @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput,
    @CurrentUser() user: User,
  ) {
    const recipe = await this.recipesService.findOne(updateRecipeInput.id);
    if (recipe.authorId !== user.id) {
      throw new Error('You can only update your own recipes');
    }
    return this.recipesService.update(updateRecipeInput.id, updateRecipeInput);
  }

  @Mutation(() => Recipe)
  @UseGuards(JwtAuthGuard)
  async removeRecipe(
    @Args('id') id: string,
    @CurrentUser() user: User,
  ) {
    const recipe = await this.recipesService.findOne(id);
    if (recipe.authorId !== user.id) {
      throw new Error('You can only delete your own recipes');
    }
    return this.recipesService.remove(id);
  }

  @Query(() => [Recipe], { name: 'searchRecipes' })
  async search(
    @Args('query') query: string,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.search(query, skip, take);
  }

  @Query(() => [Recipe], { name: 'recipesByAuthor' })
  async findByAuthor(
    @Args('authorId') authorId: string,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.findByAuthor(authorId, skip, take);
  }

  @Query(() => [Recipe], { name: 'recipesByTag' })
  async findByTag(
    @Args('tagId') tagId: string,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.findByTag(tagId, skip, take);
  }

  @Query(() => [Recipe], { name: 'recipesByAllergen' })
  async findByAllergen(
    @Args('allergenId') allergenId: string,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.findByAllergen(allergenId, skip, take);
  }

  @Query(() => [Recipe], { name: 'recipesByDietaryTag' })
  async findByDietaryTag(
    @Args('dietaryTagId') dietaryTagId: string,
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
  ) {
    return this.recipesService.findByDietaryTag(dietaryTagId, skip, take);
  }
} 