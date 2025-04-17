import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PlacesService } from './places.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User, Place, PlaceCreateInput, PlaceUpdateInput } from '../generated';

@Resolver(() => Place)
export class PlacesResolver {
  constructor(private readonly placesService: PlacesService) {}

  @Query(() => [Place], { name: 'places' })
  async findAll(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<Place[]> {
    return this.placesService.findAll(skip, take);
  }

  @Query(() => Place, { name: 'place' })
  async findOne(@Args('id') id: string): Promise<Place> {
    return this.placesService.findOne(id);
  }

  @Query(() => [Place], { name: 'searchPlaces' })
  async search(
    @Args('query') query: string,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<Place[]> {
    return this.placesService.search(query, skip, take);
  }

  @Query(() => [Place], { name: 'placesByTag' })
  async findByTag(
    @Args('tagId') tagId: string,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<Place[]> {
    return this.placesService.findByTag(tagId, skip, take);
  }

  @Query(() => [Place], { name: 'placesByUser' })
  async findByUser(
    @Args('userId') userId: string,
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<Place[]> {
    return this.placesService.findByUser(userId, skip, take);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async createPlace(
    @Args('createPlaceInput') createPlaceInput: PlaceCreateInput,
    @CurrentUser() user: User,
  ): Promise<Place> {
    return this.placesService.create(createPlaceInput, user);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async updatePlace(
    @Args('id') id: string,
    @Args('updatePlaceInput') updatePlaceInput: PlaceUpdateInput,
    @CurrentUser() user: User,
  ): Promise<Place> {
    return this.placesService.update(id, updatePlaceInput, user);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async removePlace(
    @Args('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Place> {
    return this.placesService.remove(id, user);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async flagPlace(
    @Args('id') id: string,
    @Args('reason') reason: string,
    @CurrentUser() user: User,
  ): Promise<Place> {
    return this.placesService.flag(id, reason, user);
  }

  @Mutation(() => Place)
  @UseGuards(JwtAuthGuard)
  async verifyPlace(
    @Args('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Place> {
    return this.placesService.verify(id, user);
  }
} 