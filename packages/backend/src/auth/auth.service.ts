import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = await this.createRefreshToken(user.id);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user,
    };
  }

  async createRefreshToken(userId: string) {
    // Get user to include in token payload
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Create JWT refresh token with longer expiration
    const payload = { 
      email: user.email, 
      sub: user.id,
      type: 'refresh'
    };
    
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    
    // Store token reference in database with expiration
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId,
        expiresAt,
      },
    });

    return refreshToken;
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      // Verify the JWT refresh token
      const payload = this.jwtService.verify(refreshToken);
      
      // Check if token is valid and is a refresh token
      if (!payload || payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid refresh token');
      }
      
      // Find the token in the database to ensure it hasn't been revoked
      const tokenRecord = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { user: true },
      });

      if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }

      // Generate new access token
      const accessPayload = { email: payload.email, sub: payload.sub };
      return {
        access_token: this.jwtService.sign(accessPayload),
      };
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
      throw error;
    }
  }

  async createAnonymousUser() {
    // Create a user with a simple anonymous ID
    const anonymousId = `anon_${uuidv4().substring(0, 8)}`;
    
    // Create the user in the database
    const user = await this.prisma.user.create({
      data: {
        id: anonymousId,
        email: `${anonymousId}@anonymous.foodguard.app`,
        isAnonymous: true,
      },
    });
    
    // Generate tokens
    const tokens = await this.generateTokens(user);
    
    return {
      user,
      tokens,
    };
  }

  async convertAnonymousUser(anonymousToken: string, email: string, password: string, name?: string) {
    try {
      // Verify the anonymous token
      const payload = this.jwtService.verify(anonymousToken);
      
      if (!payload.isAnonymous) {
        throw new UnauthorizedException('Invalid anonymous token');
      }
      
      const anonymousId = payload.sub;
      
      // Find the anonymous user
      const anonymousUser = await this.prisma.user.findUnique({
        where: { id: anonymousId },
      });
      
      if (!anonymousUser || !anonymousUser.isAnonymous) {
        throw new UnauthorizedException('Anonymous user not found');
      }
      
      // Check if email is already taken
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });
      
      if (existingUser) {
        throw new Error('Email already in use');
      }
      
      // Update the user with real credentials
      // We no longer store the password in the User model
      const updatedUser = await this.prisma.user.update({
        where: { id: anonymousId },
        data: {
          email,
          name,
          isAnonymous: false,
        },
      });
      
      // Create new tokens for the converted user
      const accessToken = this.jwtService.sign({ email, sub: anonymousId });
      const refreshToken = await this.createRefreshToken(anonymousId);
      
      return {
        access_token: accessToken,
        refresh_token: refreshToken,
        user: updatedUser,
      };
    } catch (error) {
      if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid anonymous token');
      }
      throw error;
    }
  }

  async logout(refreshToken: string) {
    try {
      // Verify the JWT refresh token
      const payload = this.jwtService.verify(refreshToken);
      
      // Check if token is valid and is a refresh token
      if (!payload || payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid refresh token');
      }
      
      // Delete the refresh token from the database
      await this.prisma.refreshToken.deleteMany({
        where: { token: refreshToken },
      });
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
      throw error;
    }
  }

  async challenge(email: string) {
    // Check if user exists
    let user = await this.prisma.user.findUnique({ where: { email } });
    
    // If user doesn't exist, we don't create one automatically
    // The user will be created after verification
    if (!user) {
      // Generate a JWT token for verification
      const payload = { 
        email, 
        type: 'verification'
      };
      
      // Use expiresIn option instead of manually setting exp
      const token = this.jwtService.sign(payload, { expiresIn: '15m' });
      
      // In a real app, you would send an email with the verification link
      // For now, we'll just return the token
      const verificationUrl = `${this.configService.get('FRONTEND_URL')}/verify?email=${encodeURIComponent(email)}&token=${token}`;
      
      return {
        success: true,
        message: `Verification link sent to ${email}`,
        verificationUrl,
      };
    }
    
    // If user exists, generate a JWT token for verification
    const payload = { 
      email: user.email, 
      sub: user.id,
      type: 'verification'
    };
    
    // Use expiresIn option instead of manually setting exp
    const token = this.jwtService.sign(payload, { expiresIn: '15m' });
    
    // In a real app, you would send an email with the verification link
    // For now, we'll just return the token
    const verificationUrl = `${this.configService.get('FRONTEND_URL')}/verify?email=${encodeURIComponent(email)}&token=${token}`;
    console.log('verificationUrl', verificationUrl);
    
    return {
      success: true,
      message: `Verification link sent to ${email}`,
      verificationUrl,
    };
  }

  async verify(email: string, token: string) {
    try {
      // Verify the JWT token
      const payload = this.jwtService.verify(token);
      
      // Check if token is valid and matches the email
      if (!payload || payload.email !== email || payload.type !== 'verification') {
        throw new UnauthorizedException('Invalid or expired verification token');
      }
      
      // Check if user exists
      let user = await this.prisma.user.findUnique({ where: { email } });
      
      // If user doesn't exist, create a new one
      if (!user) {
        user = await this.prisma.user.create({
          data: {
            email,
            isAnonymous: false,
          },
        });
      } else {
        // If user exists and was anonymous, update it
        if (user.isAnonymous) {
          user = await this.prisma.user.update({
            where: { id: user.id },
            data: {
              email,
              isAnonymous: false,
            },
          });
        }
      }
      
      // Generate tokens for the user
      const tokens = await this.generateTokens(user);
      
      return {
        user,
        tokens,
      };
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Invalid or expired verification token');
      }
      throw error;
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      // Verify the JWT refresh token
      const payload = this.jwtService.verify(refreshToken);
      
      // Check if token is valid and is a refresh token
      if (!payload || payload.type !== 'refresh') {
        throw new UnauthorizedException('Invalid refresh token');
      }
      
      // Find the token in the database to ensure it hasn't been revoked
      const tokenRecord = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
        include: { user: true },
      });
      
      // Check if token exists and is valid
      if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
      
      // Generate new tokens
      const tokens = await this.generateTokens(tokenRecord.user);
      
      return tokens;
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Invalid or expired refresh token');
      }
      throw error;
    }
  }

  async generateTokens(user: any) {
    const payload = { email: user.email, sub: user.id };
    
    // Generate access token
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    
    // Generate refresh token as JWT
    const refreshPayload = { 
      email: user.email, 
      sub: user.id,
      type: 'refresh'
    };
    
    const refreshToken = this.jwtService.sign(refreshPayload, { expiresIn: '7d' });
    
    // Calculate expiration date
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days
    
    // Save the refresh token
    await this.prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt,
      },
    });
    
    return {
      tokenType: 'Bearer',
      accessToken,
      refreshToken,
      expiresAt,
    };
  }

  async challengeAnonymous() {
    // Create an anonymous user with a random unique email
    const randomId = uuidv4();
    const user = await this.prisma.user.create({
      data: {
        email: `${randomId}@anonymous`,
        isAnonymous: true,
      },
    });
    
    // Generate tokens for the anonymous user
    const tokens = await this.generateTokens(user);
    
    return {
      user,
      tokens,
    };
  }
} 