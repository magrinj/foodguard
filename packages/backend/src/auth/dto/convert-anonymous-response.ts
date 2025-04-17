import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from '../../users/entities/user.entity';

@ObjectType()
export class ConvertAnonymousResponse {
  @Field()
  access_token: string;

  @Field()
  refresh_token: string;

  @Field(() => UserEntity)
  user: UserEntity;
} 