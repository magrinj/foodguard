import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Recipe } from '../../recipes/entities/recipe.entity';
import { Place } from '../../places/entities/place.entity';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(() => [Recipe], { nullable: true })
  recipes?: Recipe[];

  @Field(() => [Place], { nullable: true })
  places?: Place[];
} 