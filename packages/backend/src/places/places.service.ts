import { Injectable, NotFoundException, ForbiddenException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Place, PlaceCreateInput, PlaceUpdateInput, User } from '@/generated';

@Injectable()
export class PlacesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(skip?: number, take?: number): Promise<Place[]> {
    return this.prisma.place.findMany({
      skip,
      take,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async findOne(id: string): Promise<Place> {
    const place = await this.prisma.place.findUnique({
      where: { id },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });

    if (!place) {
      throw new NotFoundException(`Place with ID ${id} not found`);
    }

    return place;
  }

  async search(query: string, skip?: number, take?: number): Promise<Place[]> {
    return this.prisma.place.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { address: { contains: query, mode: 'insensitive' } },
        ],
      },
      skip,
      take,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async findByTag(tagId: string, skip?: number, take?: number): Promise<Place[]> {
    return this.prisma.place.findMany({
      where: {
        tags: {
          some: {
            id: tagId,
          },
        },
      },
      skip,
      take,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async findByUser(userId: string, skip?: number, take?: number): Promise<Place[]> {
    return this.prisma.place.findMany({
      where: { addedById: userId },
      skip,
      take,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async findByGlutenFreeScore(minScore: number, skip?: number, take?: number): Promise<Place[]> {
    return this.prisma.place.findMany({
      where: {
        glutenFreeScore: {
          gte: minScore,
        },
      },
      skip,
      take,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async create(createPlaceInput: PlaceCreateInput, user: User): Promise<Place> {
    return this.prisma.place.create({
      data: {
        ...createPlaceInput,
        addedBy: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async update(id: string, updatePlaceInput: PlaceUpdateInput, user: User): Promise<Place> {
    const place = await this.findOne(id);

    if (place.addedById !== user.id) {
      throw new ForbiddenException('You can only update your own places');
    }

    return this.prisma.place.update({
      where: { id },
      data: updatePlaceInput,
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async remove(id: string, user: User): Promise<Place> {
    const place = await this.findOne(id);

    if (place.addedById !== user.id) {
      throw new ForbiddenException('You can only delete your own places');
    }

    return this.prisma.place.delete({
      where: { id },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async flag(id: string, reason: string, user: User): Promise<Place> {
    const place = await this.findOne(id);

    // Increment flag count
    return this.prisma.place.update({
      where: { id },
      data: {
        flagCount: {
          increment: 1,
        },
      },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }

  async verify(id: string, user: User): Promise<Place> {
    const place = await this.findOne(id);

    // Check if user is admin
    const userWithRole = await this.prisma.user.findUnique({
      where: { id: user.id },
      select: { id: true },
    });

    if (!userWithRole) {
      throw new ForbiddenException('You do not have permission to verify places');
    }

    return this.prisma.place.update({
      where: { id },
      data: {
        isVerified: true,
      },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        votes: true,
        addedBy: true,
        tags: true,
        savedBy: true,
      },
    });
  }
} 