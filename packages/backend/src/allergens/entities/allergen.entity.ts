import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Recipe } from '../../recipes/entities/recipe.entity';

@ObjectType()
export class Allergen {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [User], { nullable: true })
  users?: User[];

  @Field(() => [Recipe], { nullable: true })
  recipes?: Recipe[];
} 