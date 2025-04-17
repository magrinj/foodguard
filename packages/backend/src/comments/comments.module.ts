import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { RecipesModule } from '../recipes/recipes.module';

@Module({
  imports: [PrismaModule, RecipesModule],
  providers: [CommentsResolver, CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {} 