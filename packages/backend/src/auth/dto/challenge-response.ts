import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ChallengeResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
} 