import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Recipe } from './recipe.model';

@ObjectType()
export class SavedRecipe {
  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field(() => Recipe)
  recipe: Recipe;

  @Field()
  recipeId: string;

  @Field()
  savedAt: Date;
} 