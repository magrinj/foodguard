import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TokenModel {
  @Field()
  tokenType: string;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field()
  expiresAt: Date;
} 