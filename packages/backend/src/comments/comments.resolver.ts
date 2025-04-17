import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Comment, User } from '../generated';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => Comment)
  @UseGuards(JwtAuthGuard)
  async createComment(
    @CurrentUser() user: User,
    @Args('content') content: string,
    @Args('recipeId', { nullable: true }) recipeId?: string,
    @Args('placeId', { nullable: true }) placeId?: string,
  ) {
    return this.commentsService.create(content, user.id, recipeId, placeId);
  }

  @Query(() => [Comment], { name: 'commentsByRecipe' })
  async findByRecipe(@Args('recipeId') recipeId: string) {
    return this.commentsService.findByRecipe(recipeId);
  }

  @Query(() => [Comment], { name: 'commentsByPlace' })
  async findByPlace(@Args('placeId') placeId: string) {
    return this.commentsService.findByPlace(placeId);
  }

  @Query(() => [Comment], { name: 'commentsByAuthor' })
  async findByAuthor(@Args('authorId') authorId: string) {
    return this.commentsService.findByAuthor(authorId);
  }

  @Mutation(() => Comment)
  @UseGuards(JwtAuthGuard)
  async removeComment(
    @Args('id') id: string,
    @CurrentUser() user: User,
  ) {
    return this.commentsService.remove(id, user.id);
  }
} 