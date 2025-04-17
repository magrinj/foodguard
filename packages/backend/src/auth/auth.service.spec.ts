import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// Mock the JWT service
const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
};

// Mock the Prisma service
const mockPrismaService = {
  user: {
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  },
  refreshToken: {
    create: jest.fn(),
    findUnique: jest.fn(),
    deleteMany: jest.fn(),
  },
};

// Mock the Config service
const mockConfigService = {
  get: jest.fn(),
};

// Create a custom JWT error class for testing
class JsonWebTokenError extends Error {
  name = 'JsonWebTokenError';
  constructor(message: string) {
    super(message);
  }
}

class TokenExpiredError extends Error {
  name = 'TokenExpiredError';
  constructor(message: string) {
    super(message);
  }
}

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useValue: mockJwtService },
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    
    // Reset all mocks before each test
    jest.clearAllMocks();
    
    // Setup default mock implementations
    mockConfigService.get.mockReturnValue('http://localhost:3001');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createRefreshToken', () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
    };

    const mockJwtToken = 'mock.jwt.token';

    beforeEach(() => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue(mockJwtToken);
    });

    it('should create a JWT refresh token and store it in the database', async () => {
      // Arrange
      const userId = mockUser.id;
      const expectedPayload = {
        email: mockUser.email,
        sub: mockUser.id,
        type: 'refresh',
      };
      const expectedExpiresIn = '7d';

      // Act
      const result = await service.createRefreshToken(userId);

      // Assert
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockJwtService.sign).toHaveBeenCalledWith(expectedPayload, { expiresIn: expectedExpiresIn });
      expect(mockPrismaService.refreshToken.create).toHaveBeenCalled();
      expect(result).toBe(mockJwtToken);
    });

    it('should throw UnauthorizedException if user is not found', async () => {
      // Arrange
      const userId = 'non-existent-user';
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(service.createRefreshToken(userId)).rejects.toThrow(UnauthorizedException);
      expect(mockPrismaService.user.findUnique).toHaveBeenCalledWith({
        where: { id: userId },
      });
      expect(mockJwtService.sign).not.toHaveBeenCalled();
      expect(mockPrismaService.refreshToken.create).not.toHaveBeenCalled();
    });
  });

  describe('refreshAccessToken', () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
    };

    const mockTokenRecord = {
      token: 'mock.refresh.token',
      userId: mockUser.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in the future
      user: mockUser,
    };

    const mockJwtPayload = {
      email: mockUser.email,
      sub: mockUser.id,
      type: 'refresh',
    };

    const mockAccessToken = 'mock.access.token';

    beforeEach(() => {
      mockJwtService.verify.mockReturnValue(mockJwtPayload);
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(mockTokenRecord);
      mockJwtService.sign.mockReturnValue(mockAccessToken);
    });

    it('should verify the refresh token and return a new access token', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      const expectedAccessPayload = {
        email: mockJwtPayload.email,
        sub: mockJwtPayload.sub,
      };

      // Act
      const result = await service.refreshAccessToken(refreshToken);

      // Assert
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(mockJwtService.sign).toHaveBeenCalledWith(expectedAccessPayload);
      expect(result).toEqual({ access_token: mockAccessToken });
    });

    it('should throw UnauthorizedException if refresh token is invalid', async () => {
      // Arrange
      const refreshToken = 'invalid.token';
      mockJwtService.verify.mockImplementation(() => {
        throw new JsonWebTokenError('Invalid token');
      });

      // Act & Assert
      await expect(service.refreshAccessToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).not.toHaveBeenCalled();
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if refresh token is not of type refresh', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      mockJwtService.verify.mockReturnValue({
        ...mockJwtPayload,
        type: 'access', // Wrong type
      });

      // Act & Assert
      await expect(service.refreshAccessToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).not.toHaveBeenCalled();
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if token record is not found', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(service.refreshAccessToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if token is expired', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      const expiredTokenRecord = {
        ...mockTokenRecord,
        expiresAt: new Date(Date.now() - 1000), // Expired
      };
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(expiredTokenRecord);

      // Act & Assert
      await expect(service.refreshAccessToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    const mockJwtPayload = {
      email: 'test@example.com',
      sub: 'user-123',
      type: 'refresh',
    };

    beforeEach(() => {
      mockJwtService.verify.mockReturnValue(mockJwtPayload);
    });

    it('should verify the refresh token and delete it from the database', async () => {
      // Arrange
      const refreshToken = 'mock.refresh.token';

      // Act
      await service.logout(refreshToken);

      // Assert
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.deleteMany).toHaveBeenCalledWith({
        where: { token: refreshToken },
      });
    });

    it('should throw UnauthorizedException if refresh token is invalid', async () => {
      // Arrange
      const refreshToken = 'invalid.token';
      mockJwtService.verify.mockImplementation(() => {
        throw new JsonWebTokenError('Invalid token');
      });

      // Act & Assert
      await expect(service.logout(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.deleteMany).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if refresh token is not of type refresh', async () => {
      // Arrange
      const refreshToken = 'mock.refresh.token';
      mockJwtService.verify.mockReturnValue({
        ...mockJwtPayload,
        type: 'access', // Wrong type
      });

      // Act & Assert
      await expect(service.logout(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.deleteMany).not.toHaveBeenCalled();
    });
  });

  describe('refreshToken', () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
    };

    const mockTokenRecord = {
      token: 'mock.refresh.token',
      userId: mockUser.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days in the future
      user: mockUser,
    };

    const mockJwtPayload = {
      email: mockUser.email,
      sub: mockUser.id,
      type: 'refresh',
    };

    const mockTokens = {
      tokenType: 'Bearer',
      accessToken: 'mock.access.token',
      refreshToken: 'mock.new.refresh.token',
      expiresAt: new Date(),
    };

    beforeEach(() => {
      mockJwtService.verify.mockReturnValue(mockJwtPayload);
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(mockTokenRecord);
      jest.spyOn(service, 'generateTokens').mockResolvedValue(mockTokens);
    });

    it('should verify the refresh token and generate new tokens', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;

      // Act
      const result = await service.refreshToken(refreshToken);

      // Assert
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(service.generateTokens).toHaveBeenCalledWith(mockTokenRecord.user);
      expect(result).toEqual(mockTokens);
    });

    it('should throw UnauthorizedException if refresh token is invalid', async () => {
      // Arrange
      const refreshToken = 'invalid.token';
      mockJwtService.verify.mockImplementation(() => {
        throw new JsonWebTokenError('Invalid token');
      });

      // Act & Assert
      await expect(service.refreshToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).not.toHaveBeenCalled();
      expect(service.generateTokens).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if refresh token is not of type refresh', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      mockJwtService.verify.mockReturnValue({
        ...mockJwtPayload,
        type: 'access', // Wrong type
      });

      // Act & Assert
      await expect(service.refreshToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).not.toHaveBeenCalled();
      expect(service.generateTokens).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if token record is not found', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(service.refreshToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(service.generateTokens).not.toHaveBeenCalled();
    });

    it('should throw UnauthorizedException if token is expired', async () => {
      // Arrange
      const refreshToken = mockTokenRecord.token;
      const expiredTokenRecord = {
        ...mockTokenRecord,
        expiresAt: new Date(Date.now() - 1000), // Expired
      };
      mockPrismaService.refreshToken.findUnique.mockResolvedValue(expiredTokenRecord);

      // Act & Assert
      await expect(service.refreshToken(refreshToken)).rejects.toThrow(UnauthorizedException);
      expect(mockJwtService.verify).toHaveBeenCalledWith(refreshToken);
      expect(mockPrismaService.refreshToken.findUnique).toHaveBeenCalledWith({
        where: { token: refreshToken },
        include: { user: true },
      });
      expect(service.generateTokens).not.toHaveBeenCalled();
    });
  });

  describe('generateTokens', () => {
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
    };

    const mockAccessToken = 'mock.access.token';
    const mockRefreshToken = 'mock.refresh.token';

    beforeEach(() => {
      mockJwtService.sign
        .mockReturnValueOnce(mockAccessToken)
        .mockReturnValueOnce(mockRefreshToken);
    });

    it('should generate access and refresh tokens and store the refresh token in the database', async () => {
      // Arrange
      const expectedAccessPayload = {
        email: mockUser.email,
        sub: mockUser.id,
      };
      const expectedRefreshPayload = {
        email: mockUser.email,
        sub: mockUser.id,
        type: 'refresh',
      };
      const expectedAccessExpiresIn = '15m';
      const expectedRefreshExpiresIn = '7d';

      // Act
      const result = await service.generateTokens(mockUser);

      // Assert
      expect(mockJwtService.sign).toHaveBeenCalledWith(expectedAccessPayload, { expiresIn: expectedAccessExpiresIn });
      expect(mockJwtService.sign).toHaveBeenCalledWith(expectedRefreshPayload, { expiresIn: expectedRefreshExpiresIn });
      expect(mockPrismaService.refreshToken.create).toHaveBeenCalled();
      expect(result).toEqual({
        tokenType: 'Bearer',
        accessToken: mockAccessToken,
        refreshToken: mockRefreshToken,
        expiresAt: expect.any(Date),
      });
    });
  });
}); 