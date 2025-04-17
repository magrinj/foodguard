import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from '../../users/entities/user.entity';

@ObjectType()
export class AnonymousUserResponse {
  @Field(() => UserEntity)
  user: UserEntity;

  @Field()
  anonymous_token: string;
} 