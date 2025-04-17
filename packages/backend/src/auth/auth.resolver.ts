import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthResponse } from './dto/auth-response';
import { TokenModel } from './dto/token-model';
import { ChallengeResponse } from './dto/challenge-response';
import { AnonymousChallengeResponse } from './dto/anonymous-challenge-response';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => ChallengeResponse)
  async challenge(
    @Args('email') email: string,
  ) {
    return this.authService.challenge(email);
  }

  @Mutation(() => AnonymousChallengeResponse)
  async challengeAnonymous() {
    return this.authService.challengeAnonymous();
  }

  @Mutation(() => AuthResponse)
  async verify(
    @Args('email') email: string,
    @Args('token') token: string,
  ) {
    return this.authService.verify(email, token);
  }

  @Mutation(() => TokenModel)
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
  ) {
    return this.authService.refreshToken(refreshToken);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async logout(
    @Args('refreshToken') refreshToken: string,
    @Context() context: any,
  ) {
    await this.authService.logout(refreshToken);
    return true;
  }
} 