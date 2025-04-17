import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { StorageService } from './storage.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UploadUrlResponse } from './dto/upload-url-response';

@Resolver()
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}

  @Mutation(() => UploadUrlResponse)
  @UseGuards(JwtAuthGuard)
  async getUploadUrl(
    @Args('fileType') fileType: string,
    @Args('folder') folder: string,
  ) {
    return this.storageService.getUploadUrl(fileType, folder);
  }
} 