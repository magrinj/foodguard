import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Tag } from '../../tags/models/tag.model';
import { Allergen } from '../../allergens/models/allergen.model';
import { DietaryTag } from '../../dietary-tags/models/dietary-tag.model';
import { Comment } from '../../comments/models/comment.model';
import { Vote } from '../../votes/models/vote.model';
import { RecipeDifficulty } from '../dto/create-recipe.input';

registerEnumType(RecipeDifficulty, {
  name: 'RecipeDifficulty',
  description: 'The difficulty level of a recipe',
});

@ObjectType()
export class Recipe {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => [String])
  instructions: string[];

  @Field()
  prepTime: number;

  @Field()
  cookTime: number;

  @Field()
  servings: number;

  @Field(() => RecipeDifficulty)
  difficulty: RecipeDifficulty;

  @Field(() => [String])
  images: string[];

  @Field()
  isAIGenerated: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => User)
  author: User;

  @Field()
  authorId: string;

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[];

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => [Allergen], { nullable: true })
  allergens?: Allergen[];

  @Field(() => [DietaryTag], { nullable: true })
  dietaryTags?: DietaryTag[];
} 