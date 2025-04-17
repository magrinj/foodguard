import { Test, TestingModule } from '@nestjs/testing';
import { StorageService } from './storage.service';
import { ConfigService } from '@nestjs/config';
import { S3Client, DeleteObjectCommandOutput, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Mock the AWS SDK
jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/s3-request-presigner');

const mockConfigService = {
  get: jest.fn(),
};

type ConfigKeys =
  | 'S3_BUCKET_NAME'
  | 'S3_ENDPOINT'
  | 'S3_REGION'
  | 'S3_ACCESS_KEY_ID'
  | 'S3_SECRET_ACCESS_KEY'
  | 'S3_PUBLIC_URL';

describe('StorageService', () => {
  let service: StorageService;
  let mockS3Client: jest.Mocked<S3Client>;

  beforeEach(async () => {
    jest.clearAllMocks();

    // Setup default config values
    mockConfigService.get.mockImplementation((key: ConfigKeys) => {
      const config: Record<ConfigKeys, string> = {
        S3_BUCKET_NAME: 'test-bucket',
        S3_ENDPOINT: 'http://localhost:9000',
        S3_REGION: 'us-east-1',
        S3_ACCESS_KEY_ID: 'test-key',
        S3_SECRET_ACCESS_KEY: 'test-secret',
        S3_PUBLIC_URL: 'http://localhost:9000/test-bucket',
      };
      return config[key];
    });

    mockS3Client = {
      send: jest.fn().mockImplementation(async () => ({
        $metadata: { requestId: '123', attempts: 1 }
      } as DeleteObjectCommandOutput)),
    } as any as jest.Mocked<S3Client>;

    (S3Client as jest.Mock).mockImplementation(() => mockS3Client);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StorageService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<StorageService>(StorageService);
    await service.onModuleInit();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should initialize S3 client with correct config', () => {
    expect(S3Client).toHaveBeenCalledWith({
      endpoint: 'http://localhost:9000',
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'test-key',
        secretAccessKey: 'test-secret',
      },
      forcePathStyle: true,
    });
  });

  describe('getUploadUrl', () => {
    beforeEach(() => {
      (getSignedUrl as jest.Mock).mockResolvedValue('https://test-signed-url.com');
    });

    it('should generate upload URL with correct parameters', async () => {
      const result = await service.getUploadUrl('image/jpeg', 'recipes');

      expect(result).toEqual({
        uploadUrl: 'https://test-signed-url.com',
        fileUrl: expect.stringMatching(/^http:\/\/localhost:9000\/test-bucket\/recipes\/.+/),
        key: expect.stringMatching(/^recipes\/.+/),
      });
    });

    it('should throw error if S3_PUBLIC_URL is not set', async () => {
      mockConfigService.get.mockImplementation((key: ConfigKeys) => {
        if (key === 'S3_PUBLIC_URL') return undefined;
        return 'test-value';
      });

      await expect(service.getUploadUrl('image/jpeg', 'recipes')).rejects.toThrow(
        'S3_PUBLIC_URL environment variable is not set',
      );
    });
  });

  describe('getDownloadUrl', () => {
    beforeEach(() => {
      (getSignedUrl as jest.Mock).mockResolvedValue('https://test-signed-url.com');
    });

    it('should generate download URL with correct parameters', async () => {
      const key = 'recipes/test-image.jpg';
      const result = await service.getDownloadUrl(key);

      expect(result).toBe('https://test-signed-url.com');
    });
  });

  describe('deleteFile', () => {
    it('should call S3 delete command with correct parameters', async () => {
      const mockSend = jest.fn();
      (S3Client as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      const key = 'recipes/test-image.jpg';
      await service.deleteFile(key);

      expect(mockSend).toHaveBeenCalledWith(
        expect.objectContaining({
          input: {
            Bucket: 'test-bucket',
            Key: key,
          },
        }),
      );
    });

    it('should successfully delete a file', async () => {
      const mockResponse: DeleteObjectCommandOutput = {
        $metadata: { requestId: '123', attempts: 1 }
      };
      (mockS3Client.send as jest.Mock).mockResolvedValueOnce(mockResponse);

      const result = await service.deleteFile('test-key.jpg');

      expect(mockS3Client.send).toHaveBeenCalledWith(
        expect.any(DeleteObjectCommand),
      );
      expect(result).toEqual({
        key: 'test-key.jpg',
        success: true,
      });
    });

    it('should handle deletion failure gracefully', async () => {
      const error = new Error('Failed to delete');
      (mockS3Client.send as jest.Mock).mockRejectedValueOnce(error);

      const result = await service.deleteFile('test-key.jpg');

      expect(mockS3Client.send).toHaveBeenCalledWith(
        expect.any(DeleteObjectCommand),
      );
      expect(result).toEqual({
        key: 'test-key.jpg',
        success: false,
        error: 'Failed to delete',
      });
    });
  });

  describe('deleteFiles', () => {
    it('should delete multiple files', async () => {
      const mockSend = jest.fn();
      (S3Client as jest.Mock).mockImplementation(() => ({
        send: mockSend,
      }));

      const keys = ['recipes/image1.jpg', 'recipes/image2.jpg'];
      await service.deleteFiles(keys);

      expect(mockSend).toHaveBeenCalledTimes(2);
      keys.forEach(key => {
        expect(mockSend).toHaveBeenCalledWith(
          expect.objectContaining({
            input: {
              Bucket: 'test-bucket',
              Key: key,
            },
          }),
        );
      });
    });

    it('should delete multiple files successfully', async () => {
      const mockResponse: DeleteObjectCommandOutput = {
        $metadata: { requestId: '123', attempts: 1 }
      };
      (mockS3Client.send as jest.Mock).mockResolvedValue(mockResponse);

      const keys = ['file1.jpg', 'file2.jpg', 'file3.jpg'];
      const results = await service.deleteFiles(keys);

      expect(mockS3Client.send).toHaveBeenCalledTimes(3);
      expect(results).toEqual([
        { key: 'file1.jpg', success: true },
        { key: 'file2.jpg', success: true },
        { key: 'file3.jpg', success: true },
      ]);
    });

    it('should handle partial failures when deleting multiple files', async () => {
      const mockResponse: DeleteObjectCommandOutput = {
        $metadata: { requestId: '123', attempts: 1 }
      };
      (mockS3Client.send as jest.Mock)
        .mockResolvedValueOnce(mockResponse) // first file succeeds
        .mockRejectedValueOnce(new Error('Failed to delete')) // second file fails
        .mockResolvedValueOnce(mockResponse); // third file succeeds

      const keys = ['file1.jpg', 'file2.jpg', 'file3.jpg'];
      const results = await service.deleteFiles(keys);

      expect(mockS3Client.send).toHaveBeenCalledTimes(3);
      expect(results).toEqual([
        { key: 'file1.jpg', success: true },
        { key: 'file2.jpg', success: false, error: 'Failed to delete' },
        { key: 'file3.jpg', success: true },
      ]);
    });

    it('should handle empty array of keys', async () => {
      const results = await service.deleteFiles([]);

      expect(mockS3Client.send).not.toHaveBeenCalled();
      expect(results).toEqual([]);
    });
  });
}); 