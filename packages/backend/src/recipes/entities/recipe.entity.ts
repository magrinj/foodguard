import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Vote } from '../../votes/entities/vote.entity';
import { Tag } from '../../tags/entities/tag.entity';
import { Allergen } from '../../allergens/entities/allergen.entity';
import { DietaryTag } from '../../dietary-tags/entities/dietary-tag.entity';
import { SavedRecipe } from '../../users/models/saved-recipe.model';

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

  @Field()
  difficulty: string;

  @Field(() => [String])
  images: string[];

  @Field()
  isAIGenerated: boolean;

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

  @Field(() => [SavedRecipe], { nullable: true })
  savedBy?: SavedRecipe[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 