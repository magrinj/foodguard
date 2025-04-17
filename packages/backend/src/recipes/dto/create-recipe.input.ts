import { Field, InputType, Int } from '@nestjs/graphql';
import { IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export enum RecipeDifficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

@InputType()
export class CreateRecipeInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  ingredients: string[];

  @Field(() => [String])
  @IsArray()
  @IsString({ each: true })
  instructions: string[];

  @Field(() => Int)
  @IsInt()
  @Min(1)
  prepTime: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  cookTime: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  servings: number;

  @Field(() => RecipeDifficulty)
  @IsEnum(RecipeDifficulty)
  difficulty: RecipeDifficulty;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isAIGenerated?: boolean;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tagIds?: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allergenIds?: string[];

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  dietaryTagIds?: string[];
} 