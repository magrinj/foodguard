import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Recipe } from '../../recipes/models/recipe.model';
import { Place } from '../../places/models/place.model';

@ObjectType()
export class Vote {
  @Field(() => ID)
  id: string;

  @Field()
  value: number;

  @Field()
  createdAt: Date;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field()
  userId: string;

  @Field({ nullable: true })
  recipeId?: string;

  @Field({ nullable: true })
  placeId?: string;

  @Field(() => Recipe, { nullable: true })
  recipe?: Recipe;

  @Field(() => Place, { nullable: true })
  place?: Place;
} 