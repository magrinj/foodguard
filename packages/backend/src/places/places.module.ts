import { Module } from '@nestjs/common';
import { PlacesResolver } from './places.resolver';
import { PlacesService } from './places.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PlacesResolver, PlacesService],
  exports: [PlacesService],
})
export class PlacesModule {} 