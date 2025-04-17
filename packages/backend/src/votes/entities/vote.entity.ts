import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Recipe } from '../../recipes/entities/recipe.entity';
import { Place } from '../../places/entities/place.entity';

@ObjectType()
export class Vote {
  @Field(() => ID)
  id: string;

  @Field()
  value: number;

  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @Field(() => Recipe, { nullable: true })
  recipe?: Recipe;

  @Field(() => String, { nullable: true })
  recipeId?: string;

  @Field(() => Place, { nullable: true })
  place?: Place;

  @Field(() => String, { nullable: true })
  placeId?: string;

  @Field()
  createdAt: Date;
} 