import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { randomUUID } from 'crypto';

interface DeleteFileResult {
  key: string;
  success: boolean;
  error?: string;
}

@Injectable()
export class StorageService implements OnModuleInit {
  private s3Client: S3Client;
  private readonly bucketName: string;

  constructor(private configService: ConfigService) {
    const bucketName = this.configService.get<string>('S3_BUCKET_NAME');
    if (!bucketName) {
      throw new Error('S3_BUCKET_NAME environment variable is not set');
    }
    this.bucketName = bucketName;
  }

  async onModuleInit() {
    const endpoint = this.configService.get<string>('S3_ENDPOINT');
    const region = this.configService.get<string>('S3_REGION');
    const accessKeyId = this.configService.get<string>('S3_ACCESS_KEY_ID');
    const secretAccessKey = this.configService.get<string>('S3_SECRET_ACCESS_KEY');

    if (!endpoint || !region || !accessKeyId || !secretAccessKey) {
      throw new Error('Missing required S3 configuration environment variables');
    }

    this.s3Client = new S3Client({
      endpoint,
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      forcePathStyle: true, // Required for Minio
    });
  }

  /**
   * Generate a pre-signed URL for uploading a file
   * @param fileType The MIME type of the file
   * @param folder The folder to store the file in (e.g., 'recipes', 'places')
   * @returns Object containing the upload URL and the final file URL
   */
  async getUploadUrl(fileType: string, folder: string) {
    const key = `${folder}/${randomUUID()}`;
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      ContentType: fileType,
    });

    const publicUrl = this.configService.get<string>('S3_PUBLIC_URL');
    if (!publicUrl) {
      throw new Error('S3_PUBLIC_URL environment variable is not set');
    }

    const uploadUrl = await getSignedUrl(this.s3Client, command, {
      expiresIn: 3600, // URL expires in 1 hour
    });

    return {
      uploadUrl,
      fileUrl: `${publicUrl}/${key}`,
      key,
    };
  }

  /**
   * Generate a pre-signed URL for downloading a file
   * @param key The file key (path in the bucket)
   * @returns The pre-signed download URL
   */
  async getDownloadUrl(key: string) {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key,
    });

    return getSignedUrl(this.s3Client, command, {
      expiresIn: 3600, // URL expires in 1 hour
    });
  }

  /**
   * Delete a file from storage
   * @param key The file key (path in the bucket)
   * @returns Promise<DeleteFileResult> Result of the deletion operation
   */
  async deleteFile(key: string): Promise<DeleteFileResult> {
    try {
      const command = new DeleteObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      await this.s3Client.send(command);
      return { key, success: true };
    } catch (error) {
      return {
        key,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  /**
   * Delete multiple files from storage
   * @param keys Array of file keys to delete
   * @returns Promise<DeleteFileResult[]> Results of the deletion operations
   */
  async deleteFiles(keys: string[]): Promise<DeleteFileResult[]> {
    const results = await Promise.all(
      keys.map(key => this.deleteFile(key))
    );
    
    return results;
  }
} 