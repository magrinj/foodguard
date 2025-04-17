import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Allergen {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
} 