import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Recipe } from '../../recipes/entities/recipe.entity';
import { Place } from '../../places/entities/place.entity';
import { Comment } from '../../comments/entities/comment.entity';
import { Vote } from '../../votes/entities/vote.entity';
import { Allergen } from '../../allergens/entities/allergen.entity';
import { DietaryTag } from '../../dietary-tags/entities/dietary-tag.entity';
import { SavedRecipe } from '../models/saved-recipe.model';
import { SavedPlace } from '../models/saved-place.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  name: string | null;

  @Field({ nullable: true })
  avatar: string | null;

  @Field(() => Boolean)
  isAnonymous: boolean;

  @Field(() => [Recipe], { nullable: true })
  recipes?: Recipe[];

  @Field(() => [Place], { nullable: true })
  places?: Place[];

  @Field(() => [Comment], { nullable: true })
  comments?: Comment[];

  @Field(() => [Vote], { nullable: true })
  votes?: Vote[];

  @Field(() => [Allergen], { nullable: true })
  allergens?: Allergen[];

  @Field(() => [DietaryTag], { nullable: true })
  dietaryTags?: DietaryTag[];

  @Field(() => [SavedRecipe], { nullable: true })
  savedRecipes?: SavedRecipe[];

  @Field(() => [SavedPlace], { nullable: true })
  savedPlaces?: SavedPlace[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class UserEntity extends User {} 