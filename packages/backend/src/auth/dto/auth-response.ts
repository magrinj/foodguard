import { ObjectType, Field } from '@nestjs/graphql';
import { UserEntity } from '../../users/entities/user.entity';
import { TokenModel } from './token-model';

@ObjectType()
export class AuthResponse {
  @Field(() => UserEntity)
  user: UserEntity;

  @Field(() => TokenModel)
  tokens: TokenModel;
} 