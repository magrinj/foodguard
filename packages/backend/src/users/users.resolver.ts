import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { SavedPlace, SavedRecipe, User } from '../generated';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UserEntity } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<User[]> {
    return this.usersService.findAll(skip, take);
  }

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Query(() => User, { name: 'me' })
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@CurrentUser() user: UserEntity): Promise<User> {
    return this.usersService.findOne(user.id);
  }

  @Query(() => [SavedRecipe], { name: 'savedRecipes' })
  @UseGuards(JwtAuthGuard)
  async getSavedRecipes(
    @CurrentUser() user: UserEntity,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<SavedRecipe[]> {
    return this.usersService.getSavedRecipes(user.id, skip, take);
  }

  @Query(() => [SavedPlace], { name: 'savedPlaces' })
  @UseGuards(JwtAuthGuard)
  async getSavedPlaces(
    @CurrentUser() user: UserEntity,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<SavedPlace[]> {
    return this.usersService.getSavedPlaces(user.id, skip, take);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
    @CurrentUser() user: UserEntity,
  ): Promise<User> {
    return this.usersService.update(updateUserInput, user);
  }

  @Mutation(() => SavedRecipe)
  @UseGuards(JwtAuthGuard)
  async saveRecipe(
    @Args('recipeId') recipeId: string,
    @CurrentUser() user: UserEntity,
  ): Promise<SavedRecipe> {
    return this.usersService.saveRecipe(recipeId, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async unsaveRecipe(
    @Args('recipeId') recipeId: string,
    @CurrentUser() user: UserEntity,
  ): Promise<boolean> {
    return this.usersService.unsaveRecipe(recipeId, user);
  }

  @Mutation(() => SavedPlace)
  @UseGuards(JwtAuthGuard)
  async savePlace(
    @Args('placeId') placeId: string,
    @CurrentUser() user: UserEntity,
  ): Promise<SavedPlace> {
    return this.usersService.savePlace(placeId, user);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async unsavePlace(
    @Args('placeId') placeId: string,
    @CurrentUser() user: UserEntity,
  ): Promise<boolean> {
    return this.usersService.unsavePlace(placeId, user);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateAllergens(
    @Args('allergenIds', { type: () => [String] }) allergenIds: string[],
    @CurrentUser() user: UserEntity,
  ): Promise<User> {
    return this.usersService.updateAllergens(allergenIds, user);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateDietaryTags(
    @Args('dietaryTagIds', { type: () => [String] }) dietaryTagIds: string[],
    @CurrentUser() user: UserEntity,
  ): Promise<User> {
    return this.usersService.updateDietaryTags(dietaryTagIds, user);
  }
} 