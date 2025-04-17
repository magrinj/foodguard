import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { Request } from 'express';
import { ConfigModule } from '@nestjs/config';
import { AppResolver } from './app.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { StorageModule } from './storage/storage.module';
import { RecipesModule } from './recipes/recipes.module';
import { PlacesModule } from './places/places.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req }: { req: Request }) => ({ req }),
    }),
    AuthModule,
    PrismaModule,
    StorageModule,
    RecipesModule,
    PlacesModule,
    CommentsModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
