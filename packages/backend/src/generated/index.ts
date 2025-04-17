import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum VoteScalarFieldEnum {
    id = "id",
    value = "value",
    createdAt = "createdAt",
    userId = "userId",
    recipeId = "recipeId",
    placeId = "placeId"
}

export enum VerificationTokenScalarFieldEnum {
    id = "id",
    token = "token",
    userId = "userId",
    email = "email",
    expiresAt = "expiresAt",
    createdAt = "createdAt"
}

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    avatar = "avatar",
    isAnonymous = "isAnonymous",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum TagScalarFieldEnum {
    id = "id",
    name = "name",
    type = "type"
}

export enum SavedRecipeScalarFieldEnum {
    userId = "userId",
    recipeId = "recipeId",
    savedAt = "savedAt"
}

export enum SavedPlaceScalarFieldEnum {
    userId = "userId",
    placeId = "placeId",
    savedAt = "savedAt"
}

export enum RefreshTokenScalarFieldEnum {
    id = "id",
    token = "token",
    userId = "userId",
    expiresAt = "expiresAt",
    createdAt = "createdAt"
}

export enum RecipeScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    ingredients = "ingredients",
    instructions = "instructions",
    prepTime = "prepTime",
    cookTime = "cookTime",
    servings = "servings",
    difficulty = "difficulty",
    images = "images",
    isAIGenerated = "isAIGenerated",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorId = "authorId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum PlaceScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    address = "address",
    latitude = "latitude",
    longitude = "longitude",
    images = "images",
    website = "website",
    phone = "phone",
    glutenFreeScore = "glutenFreeScore",
    hasFullGFKitchen = "hasFullGFKitchen",
    isVerified = "isVerified",
    flagCount = "flagCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    addedById = "addedById"
}

export enum DietaryTagScalarFieldEnum {
    id = "id",
    name = "name"
}

export enum CommentScalarFieldEnum {
    id = "id",
    content = "content",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorId = "authorId",
    recipeId = "recipeId",
    placeId = "placeId"
}

export enum AllergenScalarFieldEnum {
    id = "id",
    name = "name"
}

registerEnumType(AllergenScalarFieldEnum, { name: 'AllergenScalarFieldEnum', description: undefined })
registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
registerEnumType(DietaryTagScalarFieldEnum, { name: 'DietaryTagScalarFieldEnum', description: undefined })
registerEnumType(PlaceScalarFieldEnum, { name: 'PlaceScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined })
registerEnumType(RefreshTokenScalarFieldEnum, { name: 'RefreshTokenScalarFieldEnum', description: undefined })
registerEnumType(SavedPlaceScalarFieldEnum, { name: 'SavedPlaceScalarFieldEnum', description: undefined })
registerEnumType(SavedRecipeScalarFieldEnum, { name: 'SavedRecipeScalarFieldEnum', description: undefined })
registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
registerEnumType(VerificationTokenScalarFieldEnum, { name: 'VerificationTokenScalarFieldEnum', description: undefined })
registerEnumType(VoteScalarFieldEnum, { name: 'VoteScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateAllergen {
    @Field(() => AllergenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AllergenCountAggregate>;
    @Field(() => AllergenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AllergenMinAggregate>;
    @Field(() => AllergenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AllergenMaxAggregate>;
}

@ArgsType()
export class AllergenAggregateArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => [AllergenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllergenOrderByWithRelationInput>;
    @Field(() => AllergenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AllergenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AllergenCountAggregateInput>;
    @Field(() => AllergenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AllergenMinAggregateInput>;
    @Field(() => AllergenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AllergenMaxAggregateInput>;
}

@InputType()
export class AllergenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class AllergenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class AllergenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@ObjectType()
export class AllergenCount {
    @Field(() => Int, {nullable:false})
    users?: number;
    @Field(() => Int, {nullable:false})
    recipes?: number;
}

@InputType()
export class AllergenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class AllergenCreateNestedManyWithoutRecipesInput {
    @Field(() => [AllergenCreateWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create?: Array<AllergenCreateWithoutRecipesInput>;
    @Field(() => [AllergenCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutRecipesInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class AllergenCreateNestedManyWithoutUsersInput {
    @Field(() => [AllergenCreateWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateWithoutUsersInput)
    create?: Array<AllergenCreateWithoutUsersInput>;
    @Field(() => [AllergenCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutUsersInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class AllergenCreateOrConnectWithoutRecipesInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenCreateWithoutRecipesInput, {nullable:false})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create!: InstanceType<typeof AllergenCreateWithoutRecipesInput>;
}

@InputType()
export class AllergenCreateOrConnectWithoutUsersInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenCreateWithoutUsersInput, {nullable:false})
    @Type(() => AllergenCreateWithoutUsersInput)
    create!: InstanceType<typeof AllergenCreateWithoutUsersInput>;
}

@InputType()
export class AllergenCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCreateNestedManyWithoutAllergensInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutAllergensInput>;
}

@InputType()
export class AllergenCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => RecipeCreateNestedManyWithoutAllergensInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAllergensInput>;
}

@InputType()
export class AllergenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCreateNestedManyWithoutAllergensInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutAllergensInput>;
    @Field(() => RecipeCreateNestedManyWithoutAllergensInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAllergensInput>;
}

@ArgsType()
export class AllergenGroupByArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => [AllergenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AllergenOrderByWithAggregationInput>;
    @Field(() => [AllergenScalarFieldEnum], {nullable:false})
    by!: Array<`${AllergenScalarFieldEnum}`>;
    @Field(() => AllergenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof AllergenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => AllergenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AllergenCountAggregateInput>;
    @Field(() => AllergenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AllergenMinAggregateInput>;
    @Field(() => AllergenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AllergenMaxAggregateInput>;
}

@ObjectType()
export class AllergenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => AllergenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof AllergenCountAggregate>;
    @Field(() => AllergenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof AllergenMinAggregate>;
    @Field(() => AllergenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof AllergenMaxAggregate>;
}

@InputType()
export class AllergenListRelationFilter {
    @Field(() => AllergenWhereInput, {nullable:true})
    every?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => AllergenWhereInput, {nullable:true})
    some?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => AllergenWhereInput, {nullable:true})
    none?: InstanceType<typeof AllergenWhereInput>;
}

@InputType()
export class AllergenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class AllergenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AllergenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AllergenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class AllergenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class AllergenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class AllergenOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class AllergenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => AllergenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof AllergenCountOrderByAggregateInput>;
    @Field(() => AllergenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof AllergenMaxOrderByAggregateInput>;
    @Field(() => AllergenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof AllergenMinOrderByAggregateInput>;
}

@InputType()
export class AllergenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeOrderByRelationAggregateInput>;
}

@InputType()
export class AllergenScalarWhereWithAggregatesInput {
    @Field(() => [AllergenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AllergenScalarWhereWithAggregatesInput>;
    @Field(() => [AllergenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AllergenScalarWhereWithAggregatesInput>;
    @Field(() => [AllergenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AllergenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AllergenScalarWhereInput {
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    AND?: Array<AllergenScalarWhereInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    OR?: Array<AllergenScalarWhereInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    NOT?: Array<AllergenScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AllergenUncheckedCreateNestedManyWithoutRecipesInput {
    @Field(() => [AllergenCreateWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create?: Array<AllergenCreateWithoutRecipesInput>;
    @Field(() => [AllergenCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutRecipesInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class AllergenUncheckedCreateNestedManyWithoutUsersInput {
    @Field(() => [AllergenCreateWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateWithoutUsersInput)
    create?: Array<AllergenCreateWithoutUsersInput>;
    @Field(() => [AllergenCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutUsersInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class AllergenUncheckedCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutAllergensInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutAllergensInput>;
}

@InputType()
export class AllergenUncheckedCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAllergensInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAllergensInput>;
}

@InputType()
export class AllergenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutAllergensInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutAllergensInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAllergensInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAllergensInput>;
}

@InputType()
export class AllergenUncheckedUpdateManyWithoutRecipesNestedInput {
    @Field(() => [AllergenCreateWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create?: Array<AllergenCreateWithoutRecipesInput>;
    @Field(() => [AllergenCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutRecipesInput>;
    @Field(() => [AllergenUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<AllergenUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<AllergenUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [AllergenUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<AllergenUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    @Type(() => AllergenScalarWhereInput)
    deleteMany?: Array<AllergenScalarWhereInput>;
}

@InputType()
export class AllergenUncheckedUpdateManyWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AllergenUncheckedUpdateManyWithoutUsersNestedInput {
    @Field(() => [AllergenCreateWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateWithoutUsersInput)
    create?: Array<AllergenCreateWithoutUsersInput>;
    @Field(() => [AllergenCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutUsersInput>;
    @Field(() => [AllergenUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<AllergenUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<AllergenUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [AllergenUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<AllergenUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    @Type(() => AllergenScalarWhereInput)
    deleteMany?: Array<AllergenScalarWhereInput>;
}

@InputType()
export class AllergenUncheckedUpdateManyWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AllergenUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AllergenUncheckedUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutAllergensNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUncheckedUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAllergensNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutAllergensNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutAllergensNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAllergensNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AllergenUpdateManyWithWhereWithoutRecipesInput {
    @Field(() => AllergenScalarWhereInput, {nullable:false})
    @Type(() => AllergenScalarWhereInput)
    where!: InstanceType<typeof AllergenScalarWhereInput>;
    @Field(() => AllergenUpdateManyMutationInput, {nullable:false})
    @Type(() => AllergenUpdateManyMutationInput)
    data!: InstanceType<typeof AllergenUpdateManyMutationInput>;
}

@InputType()
export class AllergenUpdateManyWithWhereWithoutUsersInput {
    @Field(() => AllergenScalarWhereInput, {nullable:false})
    @Type(() => AllergenScalarWhereInput)
    where!: InstanceType<typeof AllergenScalarWhereInput>;
    @Field(() => AllergenUpdateManyMutationInput, {nullable:false})
    @Type(() => AllergenUpdateManyMutationInput)
    data!: InstanceType<typeof AllergenUpdateManyMutationInput>;
}

@InputType()
export class AllergenUpdateManyWithoutRecipesNestedInput {
    @Field(() => [AllergenCreateWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create?: Array<AllergenCreateWithoutRecipesInput>;
    @Field(() => [AllergenCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutRecipesInput>;
    @Field(() => [AllergenUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<AllergenUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<AllergenUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [AllergenUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => AllergenUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<AllergenUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    @Type(() => AllergenScalarWhereInput)
    deleteMany?: Array<AllergenScalarWhereInput>;
}

@InputType()
export class AllergenUpdateManyWithoutUsersNestedInput {
    @Field(() => [AllergenCreateWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateWithoutUsersInput)
    create?: Array<AllergenCreateWithoutUsersInput>;
    @Field(() => [AllergenCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => AllergenCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<AllergenCreateOrConnectWithoutUsersInput>;
    @Field(() => [AllergenUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<AllergenUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenWhereUniqueInput], {nullable:true})
    @Type(() => AllergenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [AllergenUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<AllergenUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [AllergenUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => AllergenUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<AllergenUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [AllergenScalarWhereInput], {nullable:true})
    @Type(() => AllergenScalarWhereInput)
    deleteMany?: Array<AllergenScalarWhereInput>;
}

@InputType()
export class AllergenUpdateWithWhereUniqueWithoutRecipesInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => AllergenUpdateWithoutRecipesInput)
    data!: InstanceType<typeof AllergenUpdateWithoutRecipesInput>;
}

@InputType()
export class AllergenUpdateWithWhereUniqueWithoutUsersInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenUpdateWithoutUsersInput, {nullable:false})
    @Type(() => AllergenUpdateWithoutUsersInput)
    data!: InstanceType<typeof AllergenUpdateWithoutUsersInput>;
}

@InputType()
export class AllergenUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutAllergensNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateManyWithoutAllergensNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutAllergensNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutAllergensNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAllergensNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAllergensNestedInput>;
}

@InputType()
export class AllergenUpsertWithWhereUniqueWithoutRecipesInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => AllergenUpdateWithoutRecipesInput)
    update!: InstanceType<typeof AllergenUpdateWithoutRecipesInput>;
    @Field(() => AllergenCreateWithoutRecipesInput, {nullable:false})
    @Type(() => AllergenCreateWithoutRecipesInput)
    create!: InstanceType<typeof AllergenCreateWithoutRecipesInput>;
}

@InputType()
export class AllergenUpsertWithWhereUniqueWithoutUsersInput {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenUpdateWithoutUsersInput, {nullable:false})
    @Type(() => AllergenUpdateWithoutUsersInput)
    update!: InstanceType<typeof AllergenUpdateWithoutUsersInput>;
    @Field(() => AllergenCreateWithoutUsersInput, {nullable:false})
    @Type(() => AllergenCreateWithoutUsersInput)
    create!: InstanceType<typeof AllergenCreateWithoutUsersInput>;
}

@InputType()
export class AllergenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [AllergenWhereInput], {nullable:true})
    AND?: Array<AllergenWhereInput>;
    @Field(() => [AllergenWhereInput], {nullable:true})
    OR?: Array<AllergenWhereInput>;
    @Field(() => [AllergenWhereInput], {nullable:true})
    NOT?: Array<AllergenWhereInput>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
}

@InputType()
export class AllergenWhereInput {
    @Field(() => [AllergenWhereInput], {nullable:true})
    AND?: Array<AllergenWhereInput>;
    @Field(() => [AllergenWhereInput], {nullable:true})
    OR?: Array<AllergenWhereInput>;
    @Field(() => [AllergenWhereInput], {nullable:true})
    NOT?: Array<AllergenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
}

@ObjectType()
export class Allergen {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [User], {nullable:true})
    users?: Array<User>;
    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;
    @Field(() => AllergenCount, {nullable:false})
    _count?: InstanceType<typeof AllergenCount>;
}

@ArgsType()
export class CreateManyAllergenArgs {
    @Field(() => [AllergenCreateManyInput], {nullable:false})
    @Type(() => AllergenCreateManyInput)
    data!: Array<AllergenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneAllergenArgs {
    @Field(() => AllergenCreateInput, {nullable:false})
    @Type(() => AllergenCreateInput)
    data!: InstanceType<typeof AllergenCreateInput>;
}

@ArgsType()
export class DeleteManyAllergenArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
}

@ArgsType()
export class DeleteOneAllergenArgs {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstAllergenOrThrowArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => [AllergenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllergenOrderByWithRelationInput>;
    @Field(() => AllergenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AllergenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AllergenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstAllergenArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => [AllergenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllergenOrderByWithRelationInput>;
    @Field(() => AllergenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AllergenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AllergenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyAllergenArgs {
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
    @Field(() => [AllergenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AllergenOrderByWithRelationInput>;
    @Field(() => AllergenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [AllergenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AllergenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueAllergenOrThrowArgs {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueAllergenArgs {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpdateManyAllergenArgs {
    @Field(() => AllergenUpdateManyMutationInput, {nullable:false})
    @Type(() => AllergenUpdateManyMutationInput)
    data!: InstanceType<typeof AllergenUpdateManyMutationInput>;
    @Field(() => AllergenWhereInput, {nullable:true})
    @Type(() => AllergenWhereInput)
    where?: InstanceType<typeof AllergenWhereInput>;
}

@ArgsType()
export class UpdateOneAllergenArgs {
    @Field(() => AllergenUpdateInput, {nullable:false})
    @Type(() => AllergenUpdateInput)
    data!: InstanceType<typeof AllergenUpdateInput>;
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneAllergenArgs {
    @Field(() => AllergenWhereUniqueInput, {nullable:false})
    @Type(() => AllergenWhereUniqueInput)
    where!: Prisma.AtLeast<AllergenWhereUniqueInput, 'id' | 'name'>;
    @Field(() => AllergenCreateInput, {nullable:false})
    @Type(() => AllergenCreateInput)
    create!: InstanceType<typeof AllergenCreateInput>;
    @Field(() => AllergenUpdateInput, {nullable:false})
    @Type(() => AllergenUpdateInput)
    update!: InstanceType<typeof AllergenUpdateInput>;
}

@ObjectType()
export class AggregateComment {
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@ArgsType()
export class CommentAggregateArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@InputType()
export class CommentCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CommentCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    content!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    recipeId!: number;
    @Field(() => Int, {nullable:false})
    placeId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CommentCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class CommentCreateManyAuthorInputEnvelope {
    @Field(() => [CommentCreateManyAuthorInput], {nullable:false})
    @Type(() => CommentCreateManyAuthorInput)
    data!: Array<CommentCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentCreateManyPlaceInputEnvelope {
    @Field(() => [CommentCreateManyPlaceInput], {nullable:false})
    @Type(() => CommentCreateManyPlaceInput)
    data!: Array<CommentCreateManyPlaceInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
}

@InputType()
export class CommentCreateManyRecipeInputEnvelope {
    @Field(() => [CommentCreateManyRecipeInput], {nullable:false})
    @Type(() => CommentCreateManyRecipeInput)
    data!: Array<CommentCreateManyRecipeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class CommentCreateManyRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAuthorInput)
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutPlaceInput {
    @Field(() => [CommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateWithoutPlaceInput)
    create?: Array<CommentCreateWithoutPlaceInput>;
    @Field(() => [CommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPlaceInput>;
    @Field(() => CommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPlaceInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateNestedManyWithoutRecipeInput {
    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;
    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;
    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyRecipeInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentCreateOrConnectWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentCreateWithoutAuthorInput)
    create!: InstanceType<typeof CommentCreateWithoutAuthorInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutPlaceInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutPlaceInput, {nullable:false})
    @Type(() => CommentCreateWithoutPlaceInput)
    create!: InstanceType<typeof CommentCreateWithoutPlaceInput>;
}

@InputType()
export class CommentCreateOrConnectWithoutRecipeInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentCreateWithoutRecipeInput)
    create!: InstanceType<typeof CommentCreateWithoutRecipeInput>;
}

@InputType()
export class CommentCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutCommentsInput>;
    @Field(() => PlaceCreateNestedOneWithoutCommentsInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateWithoutPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateWithoutRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => PlaceCreateNestedOneWithoutCommentsInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutCommentsInput>;
}

@InputType()
export class CommentCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutCommentsInput>;
    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutCommentsInput>;
    @Field(() => PlaceCreateNestedOneWithoutCommentsInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutCommentsInput>;
}

@ArgsType()
export class CommentGroupByArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithAggregationInput>;
    @Field(() => [CommentScalarFieldEnum], {nullable:false})
    by!: Array<`${CommentScalarFieldEnum}`>;
    @Field(() => CommentScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CommentScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregateInput>;
    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregateInput>;
    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregateInput>;
}

@ObjectType()
export class CommentGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
    @Field(() => CommentCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CommentCountAggregate>;
    @Field(() => CommentMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CommentMinAggregate>;
    @Field(() => CommentMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CommentMaxAggregate>;
}

@InputType()
export class CommentListRelationFilter {
    @Field(() => CommentWhereInput, {nullable:true})
    every?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    some?: InstanceType<typeof CommentWhereInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    none?: InstanceType<typeof CommentWhereInput>;
}

@InputType()
export class CommentMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
}

@ObjectType()
export class CommentMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class CommentMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    content?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
}

@ObjectType()
export class CommentMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    content?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    authorId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class CommentOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class CommentOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    placeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => CommentCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CommentCountOrderByAggregateInput>;
    @Field(() => CommentMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CommentMaxOrderByAggregateInput>;
    @Field(() => CommentMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CommentMinOrderByAggregateInput>;
}

@InputType()
export class CommentOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    content?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    placeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeOrderByWithRelationInput>;
    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: InstanceType<typeof PlaceOrderByWithRelationInput>;
}

@InputType()
export class CommentScalarWhereWithAggregatesInput {
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => [CommentScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class CommentScalarWhereInput {
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    AND?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    OR?: Array<CommentScalarWhereInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    NOT?: Array<CommentScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAuthorInput)
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutPlaceInput {
    @Field(() => [CommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateWithoutPlaceInput)
    create?: Array<CommentCreateWithoutPlaceInput>;
    @Field(() => [CommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPlaceInput>;
    @Field(() => CommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPlaceInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateNestedManyWithoutRecipeInput {
    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;
    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;
    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyRecipeInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
}

@InputType()
export class CommentUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentUncheckedCreateWithoutPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
}

@InputType()
export class CommentUncheckedCreateWithoutRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAuthorInput)
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutPlaceNestedInput {
    @Field(() => [CommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateWithoutPlaceInput)
    create?: Array<CommentCreateWithoutPlaceInput>;
    @Field(() => [CommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPlaceInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => CommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPlaceInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutRecipeNestedInput {
    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;
    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyRecipeInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUncheckedUpdateManyWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutPlaceInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithWhereWithoutRecipeInput {
    @Field(() => CommentScalarWhereInput, {nullable:false})
    @Type(() => CommentScalarWhereInput)
    where!: InstanceType<typeof CommentScalarWhereInput>;
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
}

@InputType()
export class CommentUpdateManyWithoutAuthorNestedInput {
    @Field(() => [CommentCreateWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateWithoutAuthorInput)
    create?: Array<CommentCreateWithoutAuthorInput>;
    @Field(() => [CommentCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutAuthorInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => CommentCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyAuthorInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutPlaceNestedInput {
    @Field(() => [CommentCreateWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateWithoutPlaceInput)
    create?: Array<CommentCreateWithoutPlaceInput>;
    @Field(() => [CommentCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutPlaceInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => CommentCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyPlaceInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateManyWithoutRecipeNestedInput {
    @Field(() => [CommentCreateWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateWithoutRecipeInput)
    create?: Array<CommentCreateWithoutRecipeInput>;
    @Field(() => [CommentCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => CommentCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<CommentCreateOrConnectWithoutRecipeInput>;
    @Field(() => [CommentUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<CommentUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => CommentCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => CommentCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof CommentCreateManyRecipeInputEnvelope>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentWhereUniqueInput], {nullable:true})
    @Type(() => CommentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CommentWhereUniqueInput, 'id'>>;
    @Field(() => [CommentUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<CommentUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [CommentUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => CommentUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<CommentUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [CommentScalarWhereInput], {nullable:true})
    @Type(() => CommentScalarWhereInput)
    deleteMany?: Array<CommentScalarWhereInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutAuthorInput)
    data!: InstanceType<typeof CommentUpdateWithoutAuthorInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutPlaceInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => CommentUpdateWithoutPlaceInput)
    data!: InstanceType<typeof CommentUpdateWithoutPlaceInput>;
}

@InputType()
export class CommentUpdateWithWhereUniqueWithoutRecipeInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentUpdateWithoutRecipeInput)
    data!: InstanceType<typeof CommentUpdateWithoutRecipeInput>;
}

@InputType()
export class CommentUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateOneWithoutCommentsNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutCommentsNestedInput>;
    @Field(() => PlaceUpdateOneWithoutCommentsNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => RecipeUpdateOneWithoutCommentsNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => PlaceUpdateOneWithoutCommentsNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutCommentsNestedInput>;
    @Field(() => RecipeUpdateOneWithoutCommentsNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutCommentsNestedInput>;
    @Field(() => PlaceUpdateOneWithoutCommentsNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutCommentsNestedInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentUpdateWithoutAuthorInput)
    update!: InstanceType<typeof CommentUpdateWithoutAuthorInput>;
    @Field(() => CommentCreateWithoutAuthorInput, {nullable:false})
    @Type(() => CommentCreateWithoutAuthorInput)
    create!: InstanceType<typeof CommentCreateWithoutAuthorInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutPlaceInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => CommentUpdateWithoutPlaceInput)
    update!: InstanceType<typeof CommentUpdateWithoutPlaceInput>;
    @Field(() => CommentCreateWithoutPlaceInput, {nullable:false})
    @Type(() => CommentCreateWithoutPlaceInput)
    create!: InstanceType<typeof CommentCreateWithoutPlaceInput>;
}

@InputType()
export class CommentUpsertWithWhereUniqueWithoutRecipeInput {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentUpdateWithoutRecipeInput)
    update!: InstanceType<typeof CommentUpdateWithoutRecipeInput>;
    @Field(() => CommentCreateWithoutRecipeInput, {nullable:false})
    @Type(() => CommentCreateWithoutRecipeInput)
    create!: InstanceType<typeof CommentCreateWithoutRecipeInput>;
}

@InputType()
export class CommentWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeNullableRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeNullableRelationFilter>;
    @Field(() => PlaceNullableRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceNullableRelationFilter>;
}

@InputType()
export class CommentWhereInput {
    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;
    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    content?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeNullableRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeNullableRelationFilter>;
    @Field(() => PlaceNullableRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceNullableRelationFilter>;
}

@ObjectType()
export class Comment {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    content!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => String, {nullable:true})
    recipeId!: string | null;
    @Field(() => String, {nullable:true})
    placeId!: string | null;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
    @Field(() => Recipe, {nullable:true})
    recipe?: InstanceType<typeof Recipe> | null;
    @Field(() => Place, {nullable:true})
    place?: InstanceType<typeof Place> | null;
}

@ArgsType()
export class CreateManyCommentArgs {
    @Field(() => [CommentCreateManyInput], {nullable:false})
    @Type(() => CommentCreateManyInput)
    data!: Array<CommentCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCommentArgs {
    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    data!: InstanceType<typeof CommentCreateInput>;
}

@ArgsType()
export class DeleteManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class DeleteOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstCommentOrThrowArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyCommentArgs {
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
    @Field(() => [CommentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommentOrderByWithRelationInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueCommentOrThrowArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpdateManyCommentArgs {
    @Field(() => CommentUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentUpdateManyMutationInput)
    data!: InstanceType<typeof CommentUpdateManyMutationInput>;
    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: InstanceType<typeof CommentWhereInput>;
}

@ArgsType()
export class UpdateOneCommentArgs {
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    data!: InstanceType<typeof CommentUpdateInput>;
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneCommentArgs {
    @Field(() => CommentWhereUniqueInput, {nullable:false})
    @Type(() => CommentWhereUniqueInput)
    where!: Prisma.AtLeast<CommentWhereUniqueInput, 'id'>;
    @Field(() => CommentCreateInput, {nullable:false})
    @Type(() => CommentCreateInput)
    create!: InstanceType<typeof CommentCreateInput>;
    @Field(() => CommentUpdateInput, {nullable:false})
    @Type(() => CommentUpdateInput)
    update!: InstanceType<typeof CommentUpdateInput>;
}

@ObjectType()
export class AggregateDietaryTag {
    @Field(() => DietaryTagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DietaryTagCountAggregate>;
    @Field(() => DietaryTagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DietaryTagMinAggregate>;
    @Field(() => DietaryTagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DietaryTagMaxAggregate>;
}

@ArgsType()
export class CreateManyDietaryTagArgs {
    @Field(() => [DietaryTagCreateManyInput], {nullable:false})
    @Type(() => DietaryTagCreateManyInput)
    data!: Array<DietaryTagCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneDietaryTagArgs {
    @Field(() => DietaryTagCreateInput, {nullable:false})
    @Type(() => DietaryTagCreateInput)
    data!: InstanceType<typeof DietaryTagCreateInput>;
}

@ArgsType()
export class DeleteManyDietaryTagArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
}

@ArgsType()
export class DeleteOneDietaryTagArgs {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class DietaryTagAggregateArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => [DietaryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietaryTagOrderByWithRelationInput>;
    @Field(() => DietaryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DietaryTagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DietaryTagCountAggregateInput>;
    @Field(() => DietaryTagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DietaryTagMinAggregateInput>;
    @Field(() => DietaryTagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DietaryTagMaxAggregateInput>;
}

@InputType()
export class DietaryTagCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class DietaryTagCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class DietaryTagCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@ObjectType()
export class DietaryTagCount {
    @Field(() => Int, {nullable:false})
    users?: number;
    @Field(() => Int, {nullable:false})
    recipes?: number;
}

@InputType()
export class DietaryTagCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
}

@InputType()
export class DietaryTagCreateNestedManyWithoutRecipesInput {
    @Field(() => [DietaryTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create?: Array<DietaryTagCreateWithoutRecipesInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class DietaryTagCreateNestedManyWithoutUsersInput {
    @Field(() => [DietaryTagCreateWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create?: Array<DietaryTagCreateWithoutUsersInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutUsersInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class DietaryTagCreateOrConnectWithoutRecipesInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create!: InstanceType<typeof DietaryTagCreateWithoutRecipesInput>;
}

@InputType()
export class DietaryTagCreateOrConnectWithoutUsersInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagCreateWithoutUsersInput, {nullable:false})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create!: InstanceType<typeof DietaryTagCreateWithoutUsersInput>;
}

@InputType()
export class DietaryTagCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutDietaryTagsInput>;
}

@InputType()
export class DietaryTagCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => RecipeCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutDietaryTagsInput>;
}

@InputType()
export class DietaryTagCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    users?: InstanceType<typeof UserCreateNestedManyWithoutDietaryTagsInput>;
    @Field(() => RecipeCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutDietaryTagsInput>;
}

@ArgsType()
export class DietaryTagGroupByArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => [DietaryTagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DietaryTagOrderByWithAggregationInput>;
    @Field(() => [DietaryTagScalarFieldEnum], {nullable:false})
    by!: Array<`${DietaryTagScalarFieldEnum}`>;
    @Field(() => DietaryTagScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof DietaryTagScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => DietaryTagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DietaryTagCountAggregateInput>;
    @Field(() => DietaryTagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DietaryTagMinAggregateInput>;
    @Field(() => DietaryTagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DietaryTagMaxAggregateInput>;
}

@ObjectType()
export class DietaryTagGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => DietaryTagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof DietaryTagCountAggregate>;
    @Field(() => DietaryTagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof DietaryTagMinAggregate>;
    @Field(() => DietaryTagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof DietaryTagMaxAggregate>;
}

@InputType()
export class DietaryTagListRelationFilter {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    every?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => DietaryTagWhereInput, {nullable:true})
    some?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => DietaryTagWhereInput, {nullable:true})
    none?: InstanceType<typeof DietaryTagWhereInput>;
}

@InputType()
export class DietaryTagMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class DietaryTagMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class DietaryTagMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class DietaryTagMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
}

@ObjectType()
export class DietaryTagMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
}

@InputType()
export class DietaryTagMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
}

@InputType()
export class DietaryTagOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class DietaryTagOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => DietaryTagCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof DietaryTagCountOrderByAggregateInput>;
    @Field(() => DietaryTagMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof DietaryTagMaxOrderByAggregateInput>;
    @Field(() => DietaryTagMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof DietaryTagMinOrderByAggregateInput>;
}

@InputType()
export class DietaryTagOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: InstanceType<typeof UserOrderByRelationAggregateInput>;
    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeOrderByRelationAggregateInput>;
}

@InputType()
export class DietaryTagScalarWhereWithAggregatesInput {
    @Field(() => [DietaryTagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DietaryTagScalarWhereWithAggregatesInput>;
    @Field(() => [DietaryTagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DietaryTagScalarWhereWithAggregatesInput>;
    @Field(() => [DietaryTagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DietaryTagScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class DietaryTagScalarWhereInput {
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    AND?: Array<DietaryTagScalarWhereInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    OR?: Array<DietaryTagScalarWhereInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    NOT?: Array<DietaryTagScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
}

@InputType()
export class DietaryTagUncheckedCreateNestedManyWithoutRecipesInput {
    @Field(() => [DietaryTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create?: Array<DietaryTagCreateWithoutRecipesInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class DietaryTagUncheckedCreateNestedManyWithoutUsersInput {
    @Field(() => [DietaryTagCreateWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create?: Array<DietaryTagCreateWithoutUsersInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutUsersInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class DietaryTagUncheckedCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDietaryTagsInput>;
}

@InputType()
export class DietaryTagUncheckedCreateWithoutUsersInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutDietaryTagsInput>;
}

@InputType()
export class DietaryTagUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => UserUncheckedCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedCreateNestedManyWithoutDietaryTagsInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutDietaryTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutDietaryTagsInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput {
    @Field(() => [DietaryTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create?: Array<DietaryTagCreateWithoutRecipesInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [DietaryTagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<DietaryTagUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<DietaryTagUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [DietaryTagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<DietaryTagUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    @Type(() => DietaryTagScalarWhereInput)
    deleteMany?: Array<DietaryTagScalarWhereInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateManyWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateManyWithoutUsersNestedInput {
    @Field(() => [DietaryTagCreateWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create?: Array<DietaryTagCreateWithoutUsersInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutUsersInput>;
    @Field(() => [DietaryTagUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<DietaryTagUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<DietaryTagUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [DietaryTagUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<DietaryTagUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    @Type(() => DietaryTagScalarWhereInput)
    deleteMany?: Array<DietaryTagScalarWhereInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateManyWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUncheckedUpdateManyWithoutDietaryTagsNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class DietaryTagUpdateManyWithWhereWithoutRecipesInput {
    @Field(() => DietaryTagScalarWhereInput, {nullable:false})
    @Type(() => DietaryTagScalarWhereInput)
    where!: InstanceType<typeof DietaryTagScalarWhereInput>;
    @Field(() => DietaryTagUpdateManyMutationInput, {nullable:false})
    @Type(() => DietaryTagUpdateManyMutationInput)
    data!: InstanceType<typeof DietaryTagUpdateManyMutationInput>;
}

@InputType()
export class DietaryTagUpdateManyWithWhereWithoutUsersInput {
    @Field(() => DietaryTagScalarWhereInput, {nullable:false})
    @Type(() => DietaryTagScalarWhereInput)
    where!: InstanceType<typeof DietaryTagScalarWhereInput>;
    @Field(() => DietaryTagUpdateManyMutationInput, {nullable:false})
    @Type(() => DietaryTagUpdateManyMutationInput)
    data!: InstanceType<typeof DietaryTagUpdateManyMutationInput>;
}

@InputType()
export class DietaryTagUpdateManyWithoutRecipesNestedInput {
    @Field(() => [DietaryTagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create?: Array<DietaryTagCreateWithoutRecipesInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [DietaryTagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<DietaryTagUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<DietaryTagUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [DietaryTagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => DietaryTagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<DietaryTagUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    @Type(() => DietaryTagScalarWhereInput)
    deleteMany?: Array<DietaryTagScalarWhereInput>;
}

@InputType()
export class DietaryTagUpdateManyWithoutUsersNestedInput {
    @Field(() => [DietaryTagCreateWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create?: Array<DietaryTagCreateWithoutUsersInput>;
    @Field(() => [DietaryTagCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<DietaryTagCreateOrConnectWithoutUsersInput>;
    @Field(() => [DietaryTagUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<DietaryTagUpsertWithWhereUniqueWithoutUsersInput>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagWhereUniqueInput], {nullable:true})
    @Type(() => DietaryTagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [DietaryTagUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<DietaryTagUpdateWithWhereUniqueWithoutUsersInput>;
    @Field(() => [DietaryTagUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => DietaryTagUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<DietaryTagUpdateManyWithWhereWithoutUsersInput>;
    @Field(() => [DietaryTagScalarWhereInput], {nullable:true})
    @Type(() => DietaryTagScalarWhereInput)
    deleteMany?: Array<DietaryTagScalarWhereInput>;
}

@InputType()
export class DietaryTagUpdateWithWhereUniqueWithoutRecipesInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => DietaryTagUpdateWithoutRecipesInput)
    data!: InstanceType<typeof DietaryTagUpdateWithoutRecipesInput>;
}

@InputType()
export class DietaryTagUpdateWithWhereUniqueWithoutUsersInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagUpdateWithoutUsersInput, {nullable:false})
    @Type(() => DietaryTagUpdateWithoutUsersInput)
    data!: InstanceType<typeof DietaryTagUpdateWithoutUsersInput>;
}

@InputType()
export class DietaryTagUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUpdateWithoutUsersInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    users?: InstanceType<typeof UserUpdateManyWithoutDietaryTagsNestedInput>;
    @Field(() => RecipeUpdateManyWithoutDietaryTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutDietaryTagsNestedInput>;
}

@InputType()
export class DietaryTagUpsertWithWhereUniqueWithoutRecipesInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => DietaryTagUpdateWithoutRecipesInput)
    update!: InstanceType<typeof DietaryTagUpdateWithoutRecipesInput>;
    @Field(() => DietaryTagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => DietaryTagCreateWithoutRecipesInput)
    create!: InstanceType<typeof DietaryTagCreateWithoutRecipesInput>;
}

@InputType()
export class DietaryTagUpsertWithWhereUniqueWithoutUsersInput {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagUpdateWithoutUsersInput, {nullable:false})
    @Type(() => DietaryTagUpdateWithoutUsersInput)
    update!: InstanceType<typeof DietaryTagUpdateWithoutUsersInput>;
    @Field(() => DietaryTagCreateWithoutUsersInput, {nullable:false})
    @Type(() => DietaryTagCreateWithoutUsersInput)
    create!: InstanceType<typeof DietaryTagCreateWithoutUsersInput>;
}

@InputType()
export class DietaryTagWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    AND?: Array<DietaryTagWhereInput>;
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    OR?: Array<DietaryTagWhereInput>;
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    NOT?: Array<DietaryTagWhereInput>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
}

@InputType()
export class DietaryTagWhereInput {
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    AND?: Array<DietaryTagWhereInput>;
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    OR?: Array<DietaryTagWhereInput>;
    @Field(() => [DietaryTagWhereInput], {nullable:true})
    NOT?: Array<DietaryTagWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => UserListRelationFilter, {nullable:true})
    users?: InstanceType<typeof UserListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
}

@ObjectType()
export class DietaryTag {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [User], {nullable:true})
    users?: Array<User>;
    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;
    @Field(() => DietaryTagCount, {nullable:false})
    _count?: InstanceType<typeof DietaryTagCount>;
}

@ArgsType()
export class FindFirstDietaryTagOrThrowArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => [DietaryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietaryTagOrderByWithRelationInput>;
    @Field(() => DietaryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DietaryTagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DietaryTagScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstDietaryTagArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => [DietaryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietaryTagOrderByWithRelationInput>;
    @Field(() => DietaryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DietaryTagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DietaryTagScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyDietaryTagArgs {
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
    @Field(() => [DietaryTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DietaryTagOrderByWithRelationInput>;
    @Field(() => DietaryTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [DietaryTagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${DietaryTagScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueDietaryTagOrThrowArgs {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueDietaryTagArgs {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpdateManyDietaryTagArgs {
    @Field(() => DietaryTagUpdateManyMutationInput, {nullable:false})
    @Type(() => DietaryTagUpdateManyMutationInput)
    data!: InstanceType<typeof DietaryTagUpdateManyMutationInput>;
    @Field(() => DietaryTagWhereInput, {nullable:true})
    @Type(() => DietaryTagWhereInput)
    where?: InstanceType<typeof DietaryTagWhereInput>;
}

@ArgsType()
export class UpdateOneDietaryTagArgs {
    @Field(() => DietaryTagUpdateInput, {nullable:false})
    @Type(() => DietaryTagUpdateInput)
    data!: InstanceType<typeof DietaryTagUpdateInput>;
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneDietaryTagArgs {
    @Field(() => DietaryTagWhereUniqueInput, {nullable:false})
    @Type(() => DietaryTagWhereUniqueInput)
    where!: Prisma.AtLeast<DietaryTagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => DietaryTagCreateInput, {nullable:false})
    @Type(() => DietaryTagCreateInput)
    create!: InstanceType<typeof DietaryTagCreateInput>;
    @Field(() => DietaryTagUpdateInput, {nullable:false})
    @Type(() => DietaryTagUpdateInput)
    update!: InstanceType<typeof DietaryTagUpdateInput>;
}

@ObjectType()
export class AggregatePlace {
    @Field(() => PlaceCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PlaceCountAggregate>;
    @Field(() => PlaceAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PlaceAvgAggregate>;
    @Field(() => PlaceSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PlaceSumAggregate>;
    @Field(() => PlaceMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PlaceMinAggregate>;
    @Field(() => PlaceMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PlaceMaxAggregate>;
}

@ArgsType()
export class CreateManyPlaceArgs {
    @Field(() => [PlaceCreateManyInput], {nullable:false})
    @Type(() => PlaceCreateManyInput)
    data!: Array<PlaceCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePlaceArgs {
    @Field(() => PlaceCreateInput, {nullable:false})
    @Type(() => PlaceCreateInput)
    data!: InstanceType<typeof PlaceCreateInput>;
}

@ArgsType()
export class DeleteManyPlaceArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
}

@ArgsType()
export class DeleteOnePlaceArgs {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstPlaceOrThrowArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstPlaceArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyPlaceArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniquePlaceOrThrowArgs {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniquePlaceArgs {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@ArgsType()
export class PlaceAggregateArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => [PlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithRelationInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PlaceCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PlaceCountAggregateInput>;
    @Field(() => PlaceAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PlaceAvgAggregateInput>;
    @Field(() => PlaceSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PlaceSumAggregateInput>;
    @Field(() => PlaceMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PlaceMinAggregateInput>;
    @Field(() => PlaceMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PlaceMaxAggregateInput>;
}

@InputType()
export class PlaceAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    latitude?: true;
    @Field(() => Boolean, {nullable:true})
    longitude?: true;
    @Field(() => Boolean, {nullable:true})
    glutenFreeScore?: true;
    @Field(() => Boolean, {nullable:true})
    flagCount?: true;
}

@ObjectType()
export class PlaceAvgAggregate {
    @Field(() => Float, {nullable:true})
    latitude?: number;
    @Field(() => Float, {nullable:true})
    longitude?: number;
    @Field(() => Float, {nullable:true})
    glutenFreeScore?: number;
    @Field(() => Float, {nullable:true})
    flagCount?: number;
}

@InputType()
export class PlaceAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
}

@InputType()
export class PlaceCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    latitude?: true;
    @Field(() => Boolean, {nullable:true})
    longitude?: true;
    @Field(() => Boolean, {nullable:true})
    images?: true;
    @Field(() => Boolean, {nullable:true})
    website?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    glutenFreeScore?: true;
    @Field(() => Boolean, {nullable:true})
    hasFullGFKitchen?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    flagCount?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    addedById?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PlaceCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    address!: number;
    @Field(() => Int, {nullable:false})
    latitude!: number;
    @Field(() => Int, {nullable:false})
    longitude!: number;
    @Field(() => Int, {nullable:false})
    images!: number;
    @Field(() => Int, {nullable:false})
    website!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Int, {nullable:false})
    hasFullGFKitchen!: number;
    @Field(() => Int, {nullable:false})
    isVerified!: number;
    @Field(() => Int, {nullable:false})
    flagCount!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    addedById!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PlaceCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    website?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hasFullGFKitchen?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    addedById?: `${SortOrder}`;
}

@ObjectType()
export class PlaceCount {
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    votes?: number;
    @Field(() => Int, {nullable:false})
    tags?: number;
    @Field(() => Int, {nullable:false})
    savedBy?: number;
}

@InputType()
export class PlaceCreateManyAddedByInputEnvelope {
    @Field(() => [PlaceCreateManyAddedByInput], {nullable:false})
    @Type(() => PlaceCreateManyAddedByInput)
    data!: Array<PlaceCreateManyAddedByInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PlaceCreateManyAddedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class PlaceCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
}

@InputType()
export class PlaceCreateNestedManyWithoutAddedByInput {
    @Field(() => [PlaceCreateWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create?: Array<PlaceCreateWithoutAddedByInput>;
    @Field(() => [PlaceCreateOrConnectWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutAddedByInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutAddedByInput>;
    @Field(() => PlaceCreateManyAddedByInputEnvelope, {nullable:true})
    @Type(() => PlaceCreateManyAddedByInputEnvelope)
    createMany?: InstanceType<typeof PlaceCreateManyAddedByInputEnvelope>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
}

@InputType()
export class PlaceCreateNestedManyWithoutTagsInput {
    @Field(() => [PlaceCreateWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateWithoutTagsInput)
    create?: Array<PlaceCreateWithoutTagsInput>;
    @Field(() => [PlaceCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutTagsInput>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
}

@InputType()
export class PlaceCreateNestedOneWithoutCommentsInput {
    @Field(() => PlaceCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutCommentsInput)
    create?: InstanceType<typeof PlaceCreateWithoutCommentsInput>;
    @Field(() => PlaceCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutCommentsInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@InputType()
export class PlaceCreateNestedOneWithoutSavedByInput {
    @Field(() => PlaceCreateWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceCreateWithoutSavedByInput)
    create?: InstanceType<typeof PlaceCreateWithoutSavedByInput>;
    @Field(() => PlaceCreateOrConnectWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutSavedByInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutSavedByInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@InputType()
export class PlaceCreateNestedOneWithoutVotesInput {
    @Field(() => PlaceCreateWithoutVotesInput, {nullable:true})
    @Type(() => PlaceCreateWithoutVotesInput)
    create?: InstanceType<typeof PlaceCreateWithoutVotesInput>;
    @Field(() => PlaceCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutVotesInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@InputType()
export class PlaceCreateOrConnectWithoutAddedByInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateWithoutAddedByInput, {nullable:false})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create!: InstanceType<typeof PlaceCreateWithoutAddedByInput>;
}

@InputType()
export class PlaceCreateOrConnectWithoutCommentsInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutCommentsInput)
    create!: InstanceType<typeof PlaceCreateWithoutCommentsInput>;
}

@InputType()
export class PlaceCreateOrConnectWithoutSavedByInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateWithoutSavedByInput, {nullable:false})
    @Type(() => PlaceCreateWithoutSavedByInput)
    create!: InstanceType<typeof PlaceCreateWithoutSavedByInput>;
}

@InputType()
export class PlaceCreateOrConnectWithoutTagsInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateWithoutTagsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutTagsInput)
    create!: InstanceType<typeof PlaceCreateWithoutTagsInput>;
}

@InputType()
export class PlaceCreateOrConnectWithoutVotesInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateWithoutVotesInput, {nullable:false})
    @Type(() => PlaceCreateWithoutVotesInput)
    create!: InstanceType<typeof PlaceCreateWithoutVotesInput>;
}

@InputType()
export class PlaceCreateWithoutAddedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPlacesInput, {nullable:false})
    addedBy!: InstanceType<typeof UserCreateNestedOneWithoutPlacesInput>;
    @Field(() => VoteCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceCreateWithoutSavedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPlacesInput, {nullable:false})
    addedBy!: InstanceType<typeof UserCreateNestedOneWithoutPlacesInput>;
    @Field(() => CommentCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutPlacesInput>;
}

@InputType()
export class PlaceCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPlacesInput, {nullable:false})
    addedBy!: InstanceType<typeof UserCreateNestedOneWithoutPlacesInput>;
    @Field(() => CommentCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPlacesInput, {nullable:false})
    addedBy!: InstanceType<typeof UserCreateNestedOneWithoutPlacesInput>;
    @Field(() => CommentCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutPlacesInput, {nullable:false})
    addedBy!: InstanceType<typeof UserCreateNestedOneWithoutPlacesInput>;
    @Field(() => CommentCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceCreateimagesInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class PlaceGroupByArgs {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => [PlaceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PlaceOrderByWithAggregationInput>;
    @Field(() => [PlaceScalarFieldEnum], {nullable:false})
    by!: Array<`${PlaceScalarFieldEnum}`>;
    @Field(() => PlaceScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PlaceScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PlaceCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PlaceCountAggregateInput>;
    @Field(() => PlaceAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PlaceAvgAggregateInput>;
    @Field(() => PlaceSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PlaceSumAggregateInput>;
    @Field(() => PlaceMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PlaceMinAggregateInput>;
    @Field(() => PlaceMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PlaceMaxAggregateInput>;
}

@ObjectType()
export class PlaceGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => [String], {nullable:true})
    images?: Array<string>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:false})
    isVerified!: boolean;
    @Field(() => Int, {nullable:false})
    flagCount!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => PlaceCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PlaceCountAggregate>;
    @Field(() => PlaceAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof PlaceAvgAggregate>;
    @Field(() => PlaceSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof PlaceSumAggregate>;
    @Field(() => PlaceMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PlaceMinAggregate>;
    @Field(() => PlaceMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PlaceMaxAggregate>;
}

@InputType()
export class PlaceListRelationFilter {
    @Field(() => PlaceWhereInput, {nullable:true})
    every?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    some?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    none?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    latitude?: true;
    @Field(() => Boolean, {nullable:true})
    longitude?: true;
    @Field(() => Boolean, {nullable:true})
    website?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    glutenFreeScore?: true;
    @Field(() => Boolean, {nullable:true})
    hasFullGFKitchen?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    flagCount?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    addedById?: true;
}

@ObjectType()
export class PlaceMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Float, {nullable:true})
    latitude?: number;
    @Field(() => Float, {nullable:true})
    longitude?: number;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:true})
    glutenFreeScore?: number;
    @Field(() => Boolean, {nullable:true})
    hasFullGFKitchen?: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    addedById?: string;
}

@InputType()
export class PlaceMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    website?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hasFullGFKitchen?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    addedById?: `${SortOrder}`;
}

@InputType()
export class PlaceMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    address?: true;
    @Field(() => Boolean, {nullable:true})
    latitude?: true;
    @Field(() => Boolean, {nullable:true})
    longitude?: true;
    @Field(() => Boolean, {nullable:true})
    website?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    glutenFreeScore?: true;
    @Field(() => Boolean, {nullable:true})
    hasFullGFKitchen?: true;
    @Field(() => Boolean, {nullable:true})
    isVerified?: true;
    @Field(() => Boolean, {nullable:true})
    flagCount?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    addedById?: true;
}

@ObjectType()
export class PlaceMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    address?: string;
    @Field(() => Float, {nullable:true})
    latitude?: number;
    @Field(() => Float, {nullable:true})
    longitude?: number;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:true})
    glutenFreeScore?: number;
    @Field(() => Boolean, {nullable:true})
    hasFullGFKitchen?: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    addedById?: string;
}

@InputType()
export class PlaceMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    website?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    phone?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hasFullGFKitchen?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    addedById?: `${SortOrder}`;
}

@InputType()
export class PlaceNullableRelationFilter {
    @Field(() => PlaceWhereInput, {nullable:true})
    is?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class PlaceOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    website?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    phone?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hasFullGFKitchen?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    addedById?: `${SortOrder}`;
    @Field(() => PlaceCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PlaceCountOrderByAggregateInput>;
    @Field(() => PlaceAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof PlaceAvgOrderByAggregateInput>;
    @Field(() => PlaceMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PlaceMaxOrderByAggregateInput>;
    @Field(() => PlaceMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PlaceMinOrderByAggregateInput>;
    @Field(() => PlaceSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof PlaceSumOrderByAggregateInput>;
}

@InputType()
export class PlaceOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    website?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    phone?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    hasFullGFKitchen?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isVerified?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    addedById?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    addedBy?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: InstanceType<typeof VoteOrderByRelationAggregateInput>;
    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: InstanceType<typeof TagOrderByRelationAggregateInput>;
    @Field(() => SavedPlaceOrderByRelationAggregateInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceOrderByRelationAggregateInput>;
}

@InputType()
export class PlaceRelationFilter {
    @Field(() => PlaceWhereInput, {nullable:true})
    is?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    isNot?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceScalarWhereWithAggregatesInput {
    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PlaceScalarWhereWithAggregatesInput>;
    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PlaceScalarWhereWithAggregatesInput>;
    @Field(() => [PlaceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PlaceScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    latitude?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    longitude?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    website?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    flagCount?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    addedById?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class PlaceScalarWhereInput {
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    AND?: Array<PlaceScalarWhereInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    OR?: Array<PlaceScalarWhereInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    NOT?: Array<PlaceScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    latitude?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    longitude?: InstanceType<typeof FloatFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    website?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => FloatFilter, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFilter>;
    @Field(() => BoolFilter, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    flagCount?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    addedById?: InstanceType<typeof StringFilter>;
}

@InputType()
export class PlaceSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    latitude?: true;
    @Field(() => Boolean, {nullable:true})
    longitude?: true;
    @Field(() => Boolean, {nullable:true})
    glutenFreeScore?: true;
    @Field(() => Boolean, {nullable:true})
    flagCount?: true;
}

@ObjectType()
export class PlaceSumAggregate {
    @Field(() => Float, {nullable:true})
    latitude?: number;
    @Field(() => Float, {nullable:true})
    longitude?: number;
    @Field(() => Float, {nullable:true})
    glutenFreeScore?: number;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
}

@InputType()
export class PlaceSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    latitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    longitude?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    glutenFreeScore?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    flagCount?: `${SortOrder}`;
}

@InputType()
export class PlaceUncheckedCreateNestedManyWithoutAddedByInput {
    @Field(() => [PlaceCreateWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create?: Array<PlaceCreateWithoutAddedByInput>;
    @Field(() => [PlaceCreateOrConnectWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutAddedByInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutAddedByInput>;
    @Field(() => PlaceCreateManyAddedByInputEnvelope, {nullable:true})
    @Type(() => PlaceCreateManyAddedByInputEnvelope)
    createMany?: InstanceType<typeof PlaceCreateManyAddedByInputEnvelope>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
}

@InputType()
export class PlaceUncheckedCreateNestedManyWithoutTagsInput {
    @Field(() => [PlaceCreateWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateWithoutTagsInput)
    create?: Array<PlaceCreateWithoutTagsInput>;
    @Field(() => [PlaceCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutTagsInput>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
}

@InputType()
export class PlaceUncheckedCreateWithoutAddedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceUncheckedCreateWithoutSavedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutPlacesInput>;
}

@InputType()
export class PlaceUncheckedCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceUncheckedCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => PlaceCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceCreateimagesInput>;
    @Field(() => String, {nullable:true})
    website?: string;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {nullable:true})
    isVerified?: boolean;
    @Field(() => Int, {nullable:true})
    flagCount?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutPlaceInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutPlacesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutPlacesInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput>;
}

@InputType()
export class PlaceUncheckedUpdateManyWithoutAddedByNestedInput {
    @Field(() => [PlaceCreateWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create?: Array<PlaceCreateWithoutAddedByInput>;
    @Field(() => [PlaceCreateOrConnectWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutAddedByInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutAddedByInput>;
    @Field(() => [PlaceUpsertWithWhereUniqueWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpsertWithWhereUniqueWithoutAddedByInput)
    upsert?: Array<PlaceUpsertWithWhereUniqueWithoutAddedByInput>;
    @Field(() => PlaceCreateManyAddedByInputEnvelope, {nullable:true})
    @Type(() => PlaceCreateManyAddedByInputEnvelope)
    createMany?: InstanceType<typeof PlaceCreateManyAddedByInputEnvelope>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceUpdateWithWhereUniqueWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutAddedByInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutAddedByInput>;
    @Field(() => [PlaceUpdateManyWithWhereWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutAddedByInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutAddedByInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}

@InputType()
export class PlaceUncheckedUpdateManyWithoutAddedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PlaceUncheckedUpdateManyWithoutTagsNestedInput {
    @Field(() => [PlaceCreateWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateWithoutTagsInput)
    create?: Array<PlaceCreateWithoutTagsInput>;
    @Field(() => [PlaceCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutTagsInput>;
    @Field(() => [PlaceUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<PlaceUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [PlaceUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}

@InputType()
export class PlaceUncheckedUpdateManyWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PlaceUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class PlaceUncheckedUpdateWithoutAddedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUncheckedUpdateWithoutSavedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutPlacesNestedInput>;
}

@InputType()
export class PlaceUncheckedUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUncheckedUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    addedById?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PlaceUpdateManyWithWhereWithoutAddedByInput {
    @Field(() => PlaceScalarWhereInput, {nullable:false})
    @Type(() => PlaceScalarWhereInput)
    where!: InstanceType<typeof PlaceScalarWhereInput>;
    @Field(() => PlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceUpdateManyMutationInput)
    data!: InstanceType<typeof PlaceUpdateManyMutationInput>;
}

@InputType()
export class PlaceUpdateManyWithWhereWithoutTagsInput {
    @Field(() => PlaceScalarWhereInput, {nullable:false})
    @Type(() => PlaceScalarWhereInput)
    where!: InstanceType<typeof PlaceScalarWhereInput>;
    @Field(() => PlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceUpdateManyMutationInput)
    data!: InstanceType<typeof PlaceUpdateManyMutationInput>;
}

@InputType()
export class PlaceUpdateManyWithoutAddedByNestedInput {
    @Field(() => [PlaceCreateWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create?: Array<PlaceCreateWithoutAddedByInput>;
    @Field(() => [PlaceCreateOrConnectWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutAddedByInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutAddedByInput>;
    @Field(() => [PlaceUpsertWithWhereUniqueWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpsertWithWhereUniqueWithoutAddedByInput)
    upsert?: Array<PlaceUpsertWithWhereUniqueWithoutAddedByInput>;
    @Field(() => PlaceCreateManyAddedByInputEnvelope, {nullable:true})
    @Type(() => PlaceCreateManyAddedByInputEnvelope)
    createMany?: InstanceType<typeof PlaceCreateManyAddedByInputEnvelope>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceUpdateWithWhereUniqueWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutAddedByInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutAddedByInput>;
    @Field(() => [PlaceUpdateManyWithWhereWithoutAddedByInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutAddedByInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutAddedByInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}

@InputType()
export class PlaceUpdateManyWithoutTagsNestedInput {
    @Field(() => [PlaceCreateWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateWithoutTagsInput)
    create?: Array<PlaceCreateWithoutTagsInput>;
    @Field(() => [PlaceCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<PlaceCreateOrConnectWithoutTagsInput>;
    @Field(() => [PlaceUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<PlaceUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceWhereUniqueInput], {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>>;
    @Field(() => [PlaceUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<PlaceUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [PlaceUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => PlaceUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<PlaceUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [PlaceScalarWhereInput], {nullable:true})
    @Type(() => PlaceScalarWhereInput)
    deleteMany?: Array<PlaceScalarWhereInput>;
}

@InputType()
export class PlaceUpdateOneRequiredWithoutSavedByNestedInput {
    @Field(() => PlaceCreateWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceCreateWithoutSavedByInput)
    create?: InstanceType<typeof PlaceCreateWithoutSavedByInput>;
    @Field(() => PlaceCreateOrConnectWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutSavedByInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutSavedByInput>;
    @Field(() => PlaceUpsertWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutSavedByInput)
    upsert?: InstanceType<typeof PlaceUpsertWithoutSavedByInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateToOneWithWhereWithoutSavedByInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutSavedByInput)
    update?: InstanceType<typeof PlaceUpdateToOneWithWhereWithoutSavedByInput>;
}

@InputType()
export class PlaceUpdateOneWithoutCommentsNestedInput {
    @Field(() => PlaceCreateWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceCreateWithoutCommentsInput)
    create?: InstanceType<typeof PlaceCreateWithoutCommentsInput>;
    @Field(() => PlaceCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutCommentsInput>;
    @Field(() => PlaceUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof PlaceUpsertWithoutCommentsInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    disconnect?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    delete?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof PlaceUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class PlaceUpdateOneWithoutVotesNestedInput {
    @Field(() => PlaceCreateWithoutVotesInput, {nullable:true})
    @Type(() => PlaceCreateWithoutVotesInput)
    create?: InstanceType<typeof PlaceCreateWithoutVotesInput>;
    @Field(() => PlaceCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => PlaceCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof PlaceCreateOrConnectWithoutVotesInput>;
    @Field(() => PlaceUpsertWithoutVotesInput, {nullable:true})
    @Type(() => PlaceUpsertWithoutVotesInput)
    upsert?: InstanceType<typeof PlaceUpsertWithoutVotesInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    disconnect?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    delete?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:true})
    @Type(() => PlaceWhereUniqueInput)
    connect?: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => PlaceUpdateToOneWithWhereWithoutVotesInput)
    update?: InstanceType<typeof PlaceUpdateToOneWithWhereWithoutVotesInput>;
}

@InputType()
export class PlaceUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutCommentsInput)
    data!: InstanceType<typeof PlaceUpdateWithoutCommentsInput>;
}

@InputType()
export class PlaceUpdateToOneWithWhereWithoutSavedByInput {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceUpdateWithoutSavedByInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutSavedByInput)
    data!: InstanceType<typeof PlaceUpdateWithoutSavedByInput>;
}

@InputType()
export class PlaceUpdateToOneWithWhereWithoutVotesInput {
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
    @Field(() => PlaceUpdateWithoutVotesInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutVotesInput)
    data!: InstanceType<typeof PlaceUpdateWithoutVotesInput>;
}

@InputType()
export class PlaceUpdateWithWhereUniqueWithoutAddedByInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateWithoutAddedByInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutAddedByInput)
    data!: InstanceType<typeof PlaceUpdateWithoutAddedByInput>;
}

@InputType()
export class PlaceUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateWithoutTagsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutTagsInput)
    data!: InstanceType<typeof PlaceUpdateWithoutTagsInput>;
}

@InputType()
export class PlaceUpdateWithoutAddedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPlacesNestedInput, {nullable:true})
    addedBy?: InstanceType<typeof UserUpdateOneRequiredWithoutPlacesNestedInput>;
    @Field(() => VoteUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateWithoutSavedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPlacesNestedInput, {nullable:true})
    addedBy?: InstanceType<typeof UserUpdateOneRequiredWithoutPlacesNestedInput>;
    @Field(() => CommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutPlacesNestedInput>;
}

@InputType()
export class PlaceUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPlacesNestedInput, {nullable:true})
    addedBy?: InstanceType<typeof UserUpdateOneRequiredWithoutPlacesNestedInput>;
    @Field(() => CommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPlaceNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPlacesNestedInput, {nullable:true})
    addedBy?: InstanceType<typeof UserUpdateOneRequiredWithoutPlacesNestedInput>;
    @Field(() => CommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof PlaceUpdateimagesInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isVerified?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    flagCount?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutPlacesNestedInput, {nullable:true})
    addedBy?: InstanceType<typeof UserUpdateOneRequiredWithoutPlacesNestedInput>;
    @Field(() => CommentUpdateManyWithoutPlaceNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutPlaceNestedInput>;
    @Field(() => VoteUpdateManyWithoutPlaceNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutPlaceNestedInput>;
    @Field(() => TagUpdateManyWithoutPlacesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutPlacesNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutPlaceNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceUpdateManyWithoutPlaceNestedInput>;
}

@InputType()
export class PlaceUpdateimagesInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class PlaceUpsertWithWhereUniqueWithoutAddedByInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateWithoutAddedByInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutAddedByInput)
    update!: InstanceType<typeof PlaceUpdateWithoutAddedByInput>;
    @Field(() => PlaceCreateWithoutAddedByInput, {nullable:false})
    @Type(() => PlaceCreateWithoutAddedByInput)
    create!: InstanceType<typeof PlaceCreateWithoutAddedByInput>;
}

@InputType()
export class PlaceUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceUpdateWithoutTagsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutTagsInput)
    update!: InstanceType<typeof PlaceUpdateWithoutTagsInput>;
    @Field(() => PlaceCreateWithoutTagsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutTagsInput)
    create!: InstanceType<typeof PlaceCreateWithoutTagsInput>;
}

@InputType()
export class PlaceUpsertWithoutCommentsInput {
    @Field(() => PlaceUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutCommentsInput)
    update!: InstanceType<typeof PlaceUpdateWithoutCommentsInput>;
    @Field(() => PlaceCreateWithoutCommentsInput, {nullable:false})
    @Type(() => PlaceCreateWithoutCommentsInput)
    create!: InstanceType<typeof PlaceCreateWithoutCommentsInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceUpsertWithoutSavedByInput {
    @Field(() => PlaceUpdateWithoutSavedByInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutSavedByInput)
    update!: InstanceType<typeof PlaceUpdateWithoutSavedByInput>;
    @Field(() => PlaceCreateWithoutSavedByInput, {nullable:false})
    @Type(() => PlaceCreateWithoutSavedByInput)
    create!: InstanceType<typeof PlaceCreateWithoutSavedByInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceUpsertWithoutVotesInput {
    @Field(() => PlaceUpdateWithoutVotesInput, {nullable:false})
    @Type(() => PlaceUpdateWithoutVotesInput)
    update!: InstanceType<typeof PlaceUpdateWithoutVotesInput>;
    @Field(() => PlaceCreateWithoutVotesInput, {nullable:false})
    @Type(() => PlaceCreateWithoutVotesInput)
    create!: InstanceType<typeof PlaceCreateWithoutVotesInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
}

@InputType()
export class PlaceWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [PlaceWhereInput], {nullable:true})
    AND?: Array<PlaceWhereInput>;
    @Field(() => [PlaceWhereInput], {nullable:true})
    OR?: Array<PlaceWhereInput>;
    @Field(() => [PlaceWhereInput], {nullable:true})
    NOT?: Array<PlaceWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    latitude?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    longitude?: InstanceType<typeof FloatFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    website?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => FloatFilter, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFilter>;
    @Field(() => BoolFilter, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    flagCount?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    addedById?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    addedBy?: InstanceType<typeof UserRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
    @Field(() => SavedPlaceListRelationFilter, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceListRelationFilter>;
}

@InputType()
export class PlaceWhereInput {
    @Field(() => [PlaceWhereInput], {nullable:true})
    AND?: Array<PlaceWhereInput>;
    @Field(() => [PlaceWhereInput], {nullable:true})
    OR?: Array<PlaceWhereInput>;
    @Field(() => [PlaceWhereInput], {nullable:true})
    NOT?: Array<PlaceWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    address?: InstanceType<typeof StringFilter>;
    @Field(() => FloatFilter, {nullable:true})
    latitude?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    longitude?: InstanceType<typeof FloatFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    website?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    phone?: InstanceType<typeof StringNullableFilter>;
    @Field(() => FloatFilter, {nullable:true})
    glutenFreeScore?: InstanceType<typeof FloatFilter>;
    @Field(() => BoolFilter, {nullable:true})
    hasFullGFKitchen?: InstanceType<typeof BoolFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isVerified?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    flagCount?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    addedById?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    addedBy?: InstanceType<typeof UserRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
    @Field(() => SavedPlaceListRelationFilter, {nullable:true})
    savedBy?: InstanceType<typeof SavedPlaceListRelationFilter>;
}

@ObjectType()
export class Place {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    address!: string;
    @Field(() => Float, {nullable:false})
    latitude!: number;
    @Field(() => Float, {nullable:false})
    longitude!: number;
    @Field(() => [String], {nullable:true})
    images!: Array<string>;
    @Field(() => String, {nullable:true})
    website!: string | null;
    @Field(() => String, {nullable:true})
    phone!: string | null;
    @Field(() => Float, {nullable:false})
    glutenFreeScore!: number;
    @Field(() => Boolean, {nullable:false})
    hasFullGFKitchen!: boolean;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isVerified!: boolean;
    @Field(() => Int, {defaultValue:0,nullable:false})
    flagCount!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    addedById!: string;
    @Field(() => User, {nullable:false})
    addedBy?: InstanceType<typeof User>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;
    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;
    @Field(() => [SavedPlace], {nullable:true})
    savedBy?: Array<SavedPlace>;
    @Field(() => PlaceCount, {nullable:false})
    _count?: InstanceType<typeof PlaceCount>;
}

@ArgsType()
export class UpdateManyPlaceArgs {
    @Field(() => PlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => PlaceUpdateManyMutationInput)
    data!: InstanceType<typeof PlaceUpdateManyMutationInput>;
    @Field(() => PlaceWhereInput, {nullable:true})
    @Type(() => PlaceWhereInput)
    where?: InstanceType<typeof PlaceWhereInput>;
}

@ArgsType()
export class UpdateOnePlaceArgs {
    @Field(() => PlaceUpdateInput, {nullable:false})
    @Type(() => PlaceUpdateInput)
    data!: InstanceType<typeof PlaceUpdateInput>;
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOnePlaceArgs {
    @Field(() => PlaceWhereUniqueInput, {nullable:false})
    @Type(() => PlaceWhereUniqueInput)
    where!: Prisma.AtLeast<PlaceWhereUniqueInput, 'id'>;
    @Field(() => PlaceCreateInput, {nullable:false})
    @Type(() => PlaceCreateInput)
    create!: InstanceType<typeof PlaceCreateInput>;
    @Field(() => PlaceUpdateInput, {nullable:false})
    @Type(() => PlaceUpdateInput)
    update!: InstanceType<typeof PlaceUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class FloatFieldUpdateOperationsInput {
    @Field(() => Float, {nullable:true})
    set?: number;
    @Field(() => Float, {nullable:true})
    increment?: number;
    @Field(() => Float, {nullable:true})
    decrement?: number;
    @Field(() => Float, {nullable:true})
    multiply?: number;
    @Field(() => Float, {nullable:true})
    divide?: number;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class FloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => NestedDateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    @Field(() => NestedDateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatWithAggregatesFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _min?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _max?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: `${NullsOrder}`;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableListFilter {
    @Field(() => [String], {nullable:true})
    equals?: Array<string>;
    @Field(() => String, {nullable:true})
    has?: string;
    @Field(() => [String], {nullable:true})
    hasEvery?: Array<string>;
    @Field(() => [String], {nullable:true})
    hasSome?: Array<string>;
    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: `${QueryMode}`;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateRecipe {
    @Field(() => RecipeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RecipeCountAggregate>;
    @Field(() => RecipeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RecipeAvgAggregate>;
    @Field(() => RecipeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RecipeSumAggregate>;
    @Field(() => RecipeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RecipeMinAggregate>;
    @Field(() => RecipeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RecipeMaxAggregate>;
}

@ArgsType()
export class CreateManyRecipeArgs {
    @Field(() => [RecipeCreateManyInput], {nullable:false})
    @Type(() => RecipeCreateManyInput)
    data!: Array<RecipeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRecipeArgs {
    @Field(() => RecipeCreateInput, {nullable:false})
    @Type(() => RecipeCreateInput)
    data!: InstanceType<typeof RecipeCreateInput>;
}

@ArgsType()
export class DeleteManyRecipeArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
}

@ArgsType()
export class DeleteOneRecipeArgs {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstRecipeOrThrowArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstRecipeArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyRecipeArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueRecipeOrThrowArgs {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueRecipeArgs {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class RecipeAggregateArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => [RecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithRelationInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RecipeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RecipeCountAggregateInput>;
    @Field(() => RecipeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RecipeAvgAggregateInput>;
    @Field(() => RecipeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RecipeSumAggregateInput>;
    @Field(() => RecipeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RecipeMinAggregateInput>;
    @Field(() => RecipeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RecipeMaxAggregateInput>;
}

@InputType()
export class RecipeAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    prepTime?: true;
    @Field(() => Boolean, {nullable:true})
    cookTime?: true;
    @Field(() => Boolean, {nullable:true})
    servings?: true;
}

@ObjectType()
export class RecipeAvgAggregate {
    @Field(() => Float, {nullable:true})
    prepTime?: number;
    @Field(() => Float, {nullable:true})
    cookTime?: number;
    @Field(() => Float, {nullable:true})
    servings?: number;
}

@InputType()
export class RecipeAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
}

@InputType()
export class RecipeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    ingredients?: true;
    @Field(() => Boolean, {nullable:true})
    instructions?: true;
    @Field(() => Boolean, {nullable:true})
    prepTime?: true;
    @Field(() => Boolean, {nullable:true})
    cookTime?: true;
    @Field(() => Boolean, {nullable:true})
    servings?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    images?: true;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RecipeCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    ingredients!: number;
    @Field(() => Int, {nullable:false})
    instructions!: number;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => Int, {nullable:false})
    difficulty!: number;
    @Field(() => Int, {nullable:false})
    images!: number;
    @Field(() => Int, {nullable:false})
    isAIGenerated!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RecipeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    ingredients?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    instructions?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAIGenerated?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
}

@ObjectType()
export class RecipeCount {
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    votes?: number;
    @Field(() => Int, {nullable:false})
    tags?: number;
    @Field(() => Int, {nullable:false})
    allergens?: number;
    @Field(() => Int, {nullable:false})
    dietaryTags?: number;
    @Field(() => Int, {nullable:false})
    savedBy?: number;
}

@InputType()
export class RecipeCreateManyAuthorInputEnvelope {
    @Field(() => [RecipeCreateManyAuthorInput], {nullable:false})
    @Type(() => RecipeCreateManyAuthorInput)
    data!: Array<RecipeCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RecipeCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class RecipeCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
}

@InputType()
export class RecipeCreateNestedManyWithoutAllergensInput {
    @Field(() => [RecipeCreateWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create?: Array<RecipeCreateWithoutAllergensInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAllergensInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeCreateNestedManyWithoutAuthorInput {
    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof RecipeCreateManyAuthorInputEnvelope>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeCreateNestedManyWithoutDietaryTagsInput {
    @Field(() => [RecipeCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create?: Array<RecipeCreateWithoutDietaryTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeCreateNestedManyWithoutTagsInput {
    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeCreateNestedOneWithoutCommentsInput {
    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create?: InstanceType<typeof RecipeCreateWithoutCommentsInput>;
    @Field(() => RecipeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutCommentsInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@InputType()
export class RecipeCreateNestedOneWithoutSavedByInput {
    @Field(() => RecipeCreateWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeCreateWithoutSavedByInput)
    create?: InstanceType<typeof RecipeCreateWithoutSavedByInput>;
    @Field(() => RecipeCreateOrConnectWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutSavedByInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutSavedByInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@InputType()
export class RecipeCreateNestedOneWithoutVotesInput {
    @Field(() => RecipeCreateWithoutVotesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutVotesInput)
    create?: InstanceType<typeof RecipeCreateWithoutVotesInput>;
    @Field(() => RecipeCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutVotesInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@InputType()
export class RecipeCreateOrConnectWithoutAllergensInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutAllergensInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create!: InstanceType<typeof RecipeCreateWithoutAllergensInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutAuthorInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create!: InstanceType<typeof RecipeCreateWithoutAuthorInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutCommentsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create!: InstanceType<typeof RecipeCreateWithoutCommentsInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutDietaryTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create!: InstanceType<typeof RecipeCreateWithoutDietaryTagsInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutSavedByInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutSavedByInput, {nullable:false})
    @Type(() => RecipeCreateWithoutSavedByInput)
    create!: InstanceType<typeof RecipeCreateWithoutSavedByInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutTagsInput)
    create!: InstanceType<typeof RecipeCreateWithoutTagsInput>;
}

@InputType()
export class RecipeCreateOrConnectWithoutVotesInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateWithoutVotesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutVotesInput)
    create!: InstanceType<typeof RecipeCreateWithoutVotesInput>;
}

@InputType()
export class RecipeCreateWithoutAllergensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateWithoutDietaryTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateWithoutSavedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
}

@InputType()
export class RecipeCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRecipesInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutRecipesInput>;
    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeCreateimagesInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@InputType()
export class RecipeCreateingredientsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@InputType()
export class RecipeCreateinstructionsInput {
    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}

@ArgsType()
export class RecipeGroupByArgs {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => [RecipeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeOrderByWithAggregationInput>;
    @Field(() => [RecipeScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeScalarFieldEnum}`>;
    @Field(() => RecipeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RecipeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RecipeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RecipeCountAggregateInput>;
    @Field(() => RecipeAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RecipeAvgAggregateInput>;
    @Field(() => RecipeSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RecipeSumAggregateInput>;
    @Field(() => RecipeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RecipeMinAggregateInput>;
    @Field(() => RecipeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RecipeMaxAggregateInput>;
}

@ObjectType()
export class RecipeGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => [String], {nullable:true})
    ingredients?: Array<string>;
    @Field(() => [String], {nullable:true})
    instructions?: Array<string>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => [String], {nullable:true})
    images?: Array<string>;
    @Field(() => Boolean, {nullable:false})
    isAIGenerated!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => RecipeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RecipeCountAggregate>;
    @Field(() => RecipeAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof RecipeAvgAggregate>;
    @Field(() => RecipeSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof RecipeSumAggregate>;
    @Field(() => RecipeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RecipeMinAggregate>;
    @Field(() => RecipeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RecipeMaxAggregate>;
}

@InputType()
export class RecipeListRelationFilter {
    @Field(() => RecipeWhereInput, {nullable:true})
    every?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    some?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    none?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    prepTime?: true;
    @Field(() => Boolean, {nullable:true})
    cookTime?: true;
    @Field(() => Boolean, {nullable:true})
    servings?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class RecipeMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    prepTime?: number;
    @Field(() => Int, {nullable:true})
    cookTime?: number;
    @Field(() => Int, {nullable:true})
    servings?: number;
    @Field(() => String, {nullable:true})
    difficulty?: string;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class RecipeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAIGenerated?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
}

@InputType()
export class RecipeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    prepTime?: true;
    @Field(() => Boolean, {nullable:true})
    cookTime?: true;
    @Field(() => Boolean, {nullable:true})
    servings?: true;
    @Field(() => Boolean, {nullable:true})
    difficulty?: true;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class RecipeMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Int, {nullable:true})
    prepTime?: number;
    @Field(() => Int, {nullable:true})
    cookTime?: number;
    @Field(() => Int, {nullable:true})
    servings?: number;
    @Field(() => String, {nullable:true})
    difficulty?: string;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class RecipeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAIGenerated?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
}

@InputType()
export class RecipeNullableRelationFilter {
    @Field(() => RecipeWhereInput, {nullable:true})
    is?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class RecipeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    ingredients?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    instructions?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAIGenerated?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => RecipeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RecipeCountOrderByAggregateInput>;
    @Field(() => RecipeAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof RecipeAvgOrderByAggregateInput>;
    @Field(() => RecipeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RecipeMaxOrderByAggregateInput>;
    @Field(() => RecipeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RecipeMinOrderByAggregateInput>;
    @Field(() => RecipeSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof RecipeSumOrderByAggregateInput>;
}

@InputType()
export class RecipeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    ingredients?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    instructions?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    difficulty?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    images?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAIGenerated?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    authorId?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: InstanceType<typeof VoteOrderByRelationAggregateInput>;
    @Field(() => TagOrderByRelationAggregateInput, {nullable:true})
    tags?: InstanceType<typeof TagOrderByRelationAggregateInput>;
    @Field(() => AllergenOrderByRelationAggregateInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenOrderByRelationAggregateInput>;
    @Field(() => DietaryTagOrderByRelationAggregateInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagOrderByRelationAggregateInput>;
    @Field(() => SavedRecipeOrderByRelationAggregateInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeOrderByRelationAggregateInput>;
}

@InputType()
export class RecipeRelationFilter {
    @Field(() => RecipeWhereInput, {nullable:true})
    is?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    isNot?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeScalarWhereWithAggregatesInput {
    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeScalarWhereWithAggregatesInput>;
    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeScalarWhereWithAggregatesInput>;
    @Field(() => [RecipeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    ingredients?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    instructions?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    prepTime?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cookTime?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    servings?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class RecipeScalarWhereInput {
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    AND?: Array<RecipeScalarWhereInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    OR?: Array<RecipeScalarWhereInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    NOT?: Array<RecipeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    ingredients?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    instructions?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => IntFilter, {nullable:true})
    prepTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cookTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    servings?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class RecipeSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    prepTime?: true;
    @Field(() => Boolean, {nullable:true})
    cookTime?: true;
    @Field(() => Boolean, {nullable:true})
    servings?: true;
}

@ObjectType()
export class RecipeSumAggregate {
    @Field(() => Int, {nullable:true})
    prepTime?: number;
    @Field(() => Int, {nullable:true})
    cookTime?: number;
    @Field(() => Int, {nullable:true})
    servings?: number;
}

@InputType()
export class RecipeSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    prepTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    cookTime?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    servings?: `${SortOrder}`;
}

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutAllergensInput {
    @Field(() => [RecipeCreateWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create?: Array<RecipeCreateWithoutAllergensInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAllergensInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof RecipeCreateManyAuthorInputEnvelope>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutDietaryTagsInput {
    @Field(() => [RecipeCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create?: Array<RecipeCreateWithoutDietaryTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeUncheckedCreateNestedManyWithoutTagsInput {
    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
}

@InputType()
export class RecipeUncheckedCreateWithoutAllergensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutDietaryTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutSavedByInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => RecipeCreateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeCreateingredientsInput>;
    @Field(() => RecipeCreateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeCreateinstructionsInput>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => RecipeCreateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeCreateimagesInput>;
    @Field(() => Boolean, {nullable:true})
    isAIGenerated?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => CommentUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutRecipeInput>;
    @Field(() => TagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutRecipesInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutRecipesInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutAllergensNestedInput {
    @Field(() => [RecipeCreateWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create?: Array<RecipeCreateWithoutAllergensInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAllergensInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAllergensInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAllergensInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAllergensInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAllergensInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof RecipeCreateManyAuthorInputEnvelope>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutDietaryTagsNestedInput {
    @Field(() => [RecipeCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create?: Array<RecipeCreateWithoutDietaryTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutDietaryTagsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutDietaryTagsInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutTagsNestedInput {
    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutSavedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RecipeUpdateManyWithWhereWithoutAllergensInput {
    @Field(() => RecipeScalarWhereInput, {nullable:false})
    @Type(() => RecipeScalarWhereInput)
    where!: InstanceType<typeof RecipeScalarWhereInput>;
    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: InstanceType<typeof RecipeUpdateManyMutationInput>;
}

@InputType()
export class RecipeUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => RecipeScalarWhereInput, {nullable:false})
    @Type(() => RecipeScalarWhereInput)
    where!: InstanceType<typeof RecipeScalarWhereInput>;
    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: InstanceType<typeof RecipeUpdateManyMutationInput>;
}

@InputType()
export class RecipeUpdateManyWithWhereWithoutDietaryTagsInput {
    @Field(() => RecipeScalarWhereInput, {nullable:false})
    @Type(() => RecipeScalarWhereInput)
    where!: InstanceType<typeof RecipeScalarWhereInput>;
    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: InstanceType<typeof RecipeUpdateManyMutationInput>;
}

@InputType()
export class RecipeUpdateManyWithWhereWithoutTagsInput {
    @Field(() => RecipeScalarWhereInput, {nullable:false})
    @Type(() => RecipeScalarWhereInput)
    where!: InstanceType<typeof RecipeScalarWhereInput>;
    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: InstanceType<typeof RecipeUpdateManyMutationInput>;
}

@InputType()
export class RecipeUpdateManyWithoutAllergensNestedInput {
    @Field(() => [RecipeCreateWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create?: Array<RecipeCreateWithoutAllergensInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAllergensInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAllergensInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAllergensInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutAllergensInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAllergensInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAllergensInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUpdateManyWithoutAuthorNestedInput {
    @Field(() => [RecipeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create?: Array<RecipeCreateWithoutAuthorInput>;
    @Field(() => [RecipeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutAuthorInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => RecipeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => RecipeCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof RecipeCreateManyAuthorInputEnvelope>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUpdateManyWithoutDietaryTagsNestedInput {
    @Field(() => [RecipeCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create?: Array<RecipeCreateWithoutDietaryTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutDietaryTagsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutDietaryTagsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutDietaryTagsInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUpdateManyWithoutTagsNestedInput {
    @Field(() => [RecipeCreateWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateWithoutTagsInput)
    create?: Array<RecipeCreateWithoutTagsInput>;
    @Field(() => [RecipeCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<RecipeCreateOrConnectWithoutTagsInput>;
    @Field(() => [RecipeUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<RecipeUpsertWithWhereUniqueWithoutTagsInput>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>>;
    @Field(() => [RecipeUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<RecipeUpdateWithWhereUniqueWithoutTagsInput>;
    @Field(() => [RecipeUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => RecipeUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<RecipeUpdateManyWithWhereWithoutTagsInput>;
    @Field(() => [RecipeScalarWhereInput], {nullable:true})
    @Type(() => RecipeScalarWhereInput)
    deleteMany?: Array<RecipeScalarWhereInput>;
}

@InputType()
export class RecipeUpdateOneRequiredWithoutSavedByNestedInput {
    @Field(() => RecipeCreateWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeCreateWithoutSavedByInput)
    create?: InstanceType<typeof RecipeCreateWithoutSavedByInput>;
    @Field(() => RecipeCreateOrConnectWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutSavedByInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutSavedByInput>;
    @Field(() => RecipeUpsertWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutSavedByInput)
    upsert?: InstanceType<typeof RecipeUpsertWithoutSavedByInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateToOneWithWhereWithoutSavedByInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutSavedByInput)
    update?: InstanceType<typeof RecipeUpdateToOneWithWhereWithoutSavedByInput>;
}

@InputType()
export class RecipeUpdateOneWithoutCommentsNestedInput {
    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create?: InstanceType<typeof RecipeCreateWithoutCommentsInput>;
    @Field(() => RecipeCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutCommentsInput>;
    @Field(() => RecipeUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof RecipeUpsertWithoutCommentsInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    disconnect?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    delete?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof RecipeUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class RecipeUpdateOneWithoutVotesNestedInput {
    @Field(() => RecipeCreateWithoutVotesInput, {nullable:true})
    @Type(() => RecipeCreateWithoutVotesInput)
    create?: InstanceType<typeof RecipeCreateWithoutVotesInput>;
    @Field(() => RecipeCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof RecipeCreateOrConnectWithoutVotesInput>;
    @Field(() => RecipeUpsertWithoutVotesInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutVotesInput)
    upsert?: InstanceType<typeof RecipeUpsertWithoutVotesInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    disconnect?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    delete?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutVotesInput)
    update?: InstanceType<typeof RecipeUpdateToOneWithWhereWithoutVotesInput>;
}

@InputType()
export class RecipeUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCommentsInput)
    data!: InstanceType<typeof RecipeUpdateWithoutCommentsInput>;
}

@InputType()
export class RecipeUpdateToOneWithWhereWithoutSavedByInput {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeUpdateWithoutSavedByInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutSavedByInput)
    data!: InstanceType<typeof RecipeUpdateWithoutSavedByInput>;
}

@InputType()
export class RecipeUpdateToOneWithWhereWithoutVotesInput {
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
    @Field(() => RecipeUpdateWithoutVotesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutVotesInput)
    data!: InstanceType<typeof RecipeUpdateWithoutVotesInput>;
}

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutAllergensInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutAllergensInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAllergensInput)
    data!: InstanceType<typeof RecipeUpdateWithoutAllergensInput>;
}

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAuthorInput)
    data!: InstanceType<typeof RecipeUpdateWithoutAuthorInput>;
}

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutDietaryTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutDietaryTagsInput)
    data!: InstanceType<typeof RecipeUpdateWithoutDietaryTagsInput>;
}

@InputType()
export class RecipeUpdateWithWhereUniqueWithoutTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutTagsInput)
    data!: InstanceType<typeof RecipeUpdateWithoutTagsInput>;
}

@InputType()
export class RecipeUpdateWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutAuthorInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutSavedByInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateingredientsInput, {nullable:true})
    ingredients?: InstanceType<typeof RecipeUpdateingredientsInput>;
    @Field(() => RecipeUpdateinstructionsInput, {nullable:true})
    instructions?: InstanceType<typeof RecipeUpdateinstructionsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    prepTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookTime?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    servings?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    difficulty?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateimagesInput, {nullable:true})
    images?: InstanceType<typeof RecipeUpdateimagesInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutRecipesNestedInput>;
    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutRecipeNestedInput>;
    @Field(() => VoteUpdateManyWithoutRecipeNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutRecipeNestedInput>;
    @Field(() => TagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    tags?: InstanceType<typeof TagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => AllergenUpdateManyWithoutRecipesNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutRecipesNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutRecipesNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutRecipesNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutRecipeNestedInput, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeUpdateManyWithoutRecipeNestedInput>;
}

@InputType()
export class RecipeUpdateimagesInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class RecipeUpdateingredientsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class RecipeUpdateinstructionsInput {
    @Field(() => [String], {nullable:true})
    set?: Array<string>;
    @Field(() => [String], {nullable:true})
    push?: Array<string>;
}

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutAllergensInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutAllergensInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAllergensInput)
    update!: InstanceType<typeof RecipeUpdateWithoutAllergensInput>;
    @Field(() => RecipeCreateWithoutAllergensInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAllergensInput)
    create!: InstanceType<typeof RecipeCreateWithoutAllergensInput>;
}

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutAuthorInput)
    update!: InstanceType<typeof RecipeUpdateWithoutAuthorInput>;
    @Field(() => RecipeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => RecipeCreateWithoutAuthorInput)
    create!: InstanceType<typeof RecipeCreateWithoutAuthorInput>;
}

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutDietaryTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutDietaryTagsInput)
    update!: InstanceType<typeof RecipeUpdateWithoutDietaryTagsInput>;
    @Field(() => RecipeCreateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutDietaryTagsInput)
    create!: InstanceType<typeof RecipeCreateWithoutDietaryTagsInput>;
}

@InputType()
export class RecipeUpsertWithWhereUniqueWithoutTagsInput {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeUpdateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutTagsInput)
    update!: InstanceType<typeof RecipeUpdateWithoutTagsInput>;
    @Field(() => RecipeCreateWithoutTagsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutTagsInput)
    create!: InstanceType<typeof RecipeCreateWithoutTagsInput>;
}

@InputType()
export class RecipeUpsertWithoutCommentsInput {
    @Field(() => RecipeUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutCommentsInput)
    update!: InstanceType<typeof RecipeUpdateWithoutCommentsInput>;
    @Field(() => RecipeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateWithoutCommentsInput)
    create!: InstanceType<typeof RecipeCreateWithoutCommentsInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeUpsertWithoutSavedByInput {
    @Field(() => RecipeUpdateWithoutSavedByInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutSavedByInput)
    update!: InstanceType<typeof RecipeUpdateWithoutSavedByInput>;
    @Field(() => RecipeCreateWithoutSavedByInput, {nullable:false})
    @Type(() => RecipeCreateWithoutSavedByInput)
    create!: InstanceType<typeof RecipeCreateWithoutSavedByInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeUpsertWithoutVotesInput {
    @Field(() => RecipeUpdateWithoutVotesInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutVotesInput)
    update!: InstanceType<typeof RecipeUpdateWithoutVotesInput>;
    @Field(() => RecipeCreateWithoutVotesInput, {nullable:false})
    @Type(() => RecipeCreateWithoutVotesInput)
    create!: InstanceType<typeof RecipeCreateWithoutVotesInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
}

@InputType()
export class RecipeWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;
    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;
    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    ingredients?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    instructions?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => IntFilter, {nullable:true})
    prepTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cookTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    servings?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
    @Field(() => AllergenListRelationFilter, {nullable:true})
    allergens?: InstanceType<typeof AllergenListRelationFilter>;
    @Field(() => DietaryTagListRelationFilter, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagListRelationFilter>;
    @Field(() => SavedRecipeListRelationFilter, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeListRelationFilter>;
}

@InputType()
export class RecipeWhereInput {
    @Field(() => [RecipeWhereInput], {nullable:true})
    AND?: Array<RecipeWhereInput>;
    @Field(() => [RecipeWhereInput], {nullable:true})
    OR?: Array<RecipeWhereInput>;
    @Field(() => [RecipeWhereInput], {nullable:true})
    NOT?: Array<RecipeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    ingredients?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    instructions?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => IntFilter, {nullable:true})
    prepTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    cookTime?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    servings?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    difficulty?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableListFilter, {nullable:true})
    images?: InstanceType<typeof StringNullableListFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAIGenerated?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: InstanceType<typeof TagListRelationFilter>;
    @Field(() => AllergenListRelationFilter, {nullable:true})
    allergens?: InstanceType<typeof AllergenListRelationFilter>;
    @Field(() => DietaryTagListRelationFilter, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagListRelationFilter>;
    @Field(() => SavedRecipeListRelationFilter, {nullable:true})
    savedBy?: InstanceType<typeof SavedRecipeListRelationFilter>;
}

@ObjectType()
export class Recipe {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => [String], {nullable:true})
    ingredients!: Array<string>;
    @Field(() => [String], {nullable:true})
    instructions!: Array<string>;
    @Field(() => Int, {nullable:false})
    prepTime!: number;
    @Field(() => Int, {nullable:false})
    cookTime!: number;
    @Field(() => Int, {nullable:false})
    servings!: number;
    @Field(() => String, {nullable:false})
    difficulty!: string;
    @Field(() => [String], {nullable:true})
    images!: Array<string>;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isAIGenerated!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;
    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;
    @Field(() => [Allergen], {nullable:true})
    allergens?: Array<Allergen>;
    @Field(() => [DietaryTag], {nullable:true})
    dietaryTags?: Array<DietaryTag>;
    @Field(() => [SavedRecipe], {nullable:true})
    savedBy?: Array<SavedRecipe>;
    @Field(() => RecipeCount, {nullable:false})
    _count?: InstanceType<typeof RecipeCount>;
}

@ArgsType()
export class UpdateManyRecipeArgs {
    @Field(() => RecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeUpdateManyMutationInput)
    data!: InstanceType<typeof RecipeUpdateManyMutationInput>;
    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: InstanceType<typeof RecipeWhereInput>;
}

@ArgsType()
export class UpdateOneRecipeArgs {
    @Field(() => RecipeUpdateInput, {nullable:false})
    @Type(() => RecipeUpdateInput)
    data!: InstanceType<typeof RecipeUpdateInput>;
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneRecipeArgs {
    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
    @Field(() => RecipeCreateInput, {nullable:false})
    @Type(() => RecipeCreateInput)
    create!: InstanceType<typeof RecipeCreateInput>;
    @Field(() => RecipeUpdateInput, {nullable:false})
    @Type(() => RecipeUpdateInput)
    update!: InstanceType<typeof RecipeUpdateInput>;
}

@ObjectType()
export class AggregateRefreshToken {
    @Field(() => RefreshTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregate>;
    @Field(() => RefreshTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregate>;
    @Field(() => RefreshTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyRefreshTokenArgs {
    @Field(() => [RefreshTokenCreateManyInput], {nullable:false})
    @Type(() => RefreshTokenCreateManyInput)
    data!: Array<RefreshTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneRefreshTokenArgs {
    @Field(() => RefreshTokenCreateInput, {nullable:false})
    @Type(() => RefreshTokenCreateInput)
    data!: InstanceType<typeof RefreshTokenCreateInput>;
}

@ArgsType()
export class DeleteManyRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
}

@ArgsType()
export class DeleteOneRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindFirstRefreshTokenOrThrowArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyRefreshTokenArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RefreshTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueRefreshTokenOrThrowArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindUniqueRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class RefreshTokenAggregateArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithRelationInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RefreshTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregateInput>;
    @Field(() => RefreshTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregateInput>;
    @Field(() => RefreshTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregateInput>;
}

@InputType()
export class RefreshTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class RefreshTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    expiresAt!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class RefreshTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenCreateManyUserInputEnvelope {
    @Field(() => [RefreshTokenCreateManyUserInput], {nullable:false})
    @Type(() => RefreshTokenCreateManyUserInput)
    data!: Array<RefreshTokenCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class RefreshTokenCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateNestedManyWithoutUserInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class RefreshTokenCreateOrConnectWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create!: InstanceType<typeof RefreshTokenCreateWithoutUserInput>;
}

@InputType()
export class RefreshTokenCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutRefreshTokensInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutRefreshTokensInput>;
}

@ArgsType()
export class RefreshTokenGroupByArgs {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RefreshTokenOrderByWithAggregationInput>;
    @Field(() => [RefreshTokenScalarFieldEnum], {nullable:false})
    by!: Array<`${RefreshTokenScalarFieldEnum}`>;
    @Field(() => RefreshTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => RefreshTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregateInput>;
    @Field(() => RefreshTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregateInput>;
    @Field(() => RefreshTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregateInput>;
}

@ObjectType()
export class RefreshTokenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => RefreshTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountAggregate>;
    @Field(() => RefreshTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinAggregate>;
    @Field(() => RefreshTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxAggregate>;
}

@InputType()
export class RefreshTokenListRelationFilter {
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    every?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    some?: InstanceType<typeof RefreshTokenWhereInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    none?: InstanceType<typeof RefreshTokenWhereInput>;
}

@InputType()
export class RefreshTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class RefreshTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class RefreshTokenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class RefreshTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => RefreshTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof RefreshTokenCountOrderByAggregateInput>;
    @Field(() => RefreshTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof RefreshTokenMaxOrderByAggregateInput>;
    @Field(() => RefreshTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof RefreshTokenMinOrderByAggregateInput>;
}

@InputType()
export class RefreshTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class RefreshTokenScalarWhereWithAggregatesInput {
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => [RefreshTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RefreshTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class RefreshTokenScalarWhereInput {
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    AND?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    OR?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class RefreshTokenUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class RefreshTokenUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [RefreshTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [RefreshTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    @Type(() => RefreshTokenScalarWhereInput)
    deleteMany?: Array<RefreshTokenScalarWhereInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateManyWithWhereWithoutUserInput {
    @Field(() => RefreshTokenScalarWhereInput, {nullable:false})
    @Type(() => RefreshTokenScalarWhereInput)
    where!: InstanceType<typeof RefreshTokenScalarWhereInput>;
    @Field(() => RefreshTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => RefreshTokenUpdateManyMutationInput)
    data!: InstanceType<typeof RefreshTokenUpdateManyMutationInput>;
}

@InputType()
export class RefreshTokenUpdateManyWithoutUserNestedInput {
    @Field(() => [RefreshTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create?: Array<RefreshTokenCreateWithoutUserInput>;
    @Field(() => [RefreshTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RefreshTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [RefreshTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RefreshTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => RefreshTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RefreshTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof RefreshTokenCreateManyUserInputEnvelope>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenWhereUniqueInput], {nullable:true})
    @Type(() => RefreshTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [RefreshTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RefreshTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [RefreshTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RefreshTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RefreshTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [RefreshTokenScalarWhereInput], {nullable:true})
    @Type(() => RefreshTokenScalarWhereInput)
    deleteMany?: Array<RefreshTokenScalarWhereInput>;
}

@InputType()
export class RefreshTokenUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenUpdateWithoutUserInput)
    data!: InstanceType<typeof RefreshTokenUpdateWithoutUserInput>;
}

@InputType()
export class RefreshTokenUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class RefreshTokenUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutRefreshTokensNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutRefreshTokensNestedInput>;
}

@InputType()
export class RefreshTokenUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenUpdateWithoutUserInput)
    update!: InstanceType<typeof RefreshTokenUpdateWithoutUserInput>;
    @Field(() => RefreshTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => RefreshTokenCreateWithoutUserInput)
    create!: InstanceType<typeof RefreshTokenCreateWithoutUserInput>;
}

@InputType()
export class RefreshTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    AND?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    OR?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class RefreshTokenWhereInput {
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    AND?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    OR?: Array<RefreshTokenWhereInput>;
    @Field(() => [RefreshTokenWhereInput], {nullable:true})
    NOT?: Array<RefreshTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class RefreshToken {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyRefreshTokenArgs {
    @Field(() => RefreshTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => RefreshTokenUpdateManyMutationInput)
    data!: InstanceType<typeof RefreshTokenUpdateManyMutationInput>;
    @Field(() => RefreshTokenWhereInput, {nullable:true})
    @Type(() => RefreshTokenWhereInput)
    where?: InstanceType<typeof RefreshTokenWhereInput>;
}

@ArgsType()
export class UpdateOneRefreshTokenArgs {
    @Field(() => RefreshTokenUpdateInput, {nullable:false})
    @Type(() => RefreshTokenUpdateInput)
    data!: InstanceType<typeof RefreshTokenUpdateInput>;
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class UpsertOneRefreshTokenArgs {
    @Field(() => RefreshTokenWhereUniqueInput, {nullable:false})
    @Type(() => RefreshTokenWhereUniqueInput)
    where!: Prisma.AtLeast<RefreshTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => RefreshTokenCreateInput, {nullable:false})
    @Type(() => RefreshTokenCreateInput)
    create!: InstanceType<typeof RefreshTokenCreateInput>;
    @Field(() => RefreshTokenUpdateInput, {nullable:false})
    @Type(() => RefreshTokenUpdateInput)
    update!: InstanceType<typeof RefreshTokenUpdateInput>;
}

@ObjectType()
export class AggregateSavedPlace {
    @Field(() => SavedPlaceCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SavedPlaceCountAggregate>;
    @Field(() => SavedPlaceMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SavedPlaceMinAggregate>;
    @Field(() => SavedPlaceMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SavedPlaceMaxAggregate>;
}

@ArgsType()
export class CreateManySavedPlaceArgs {
    @Field(() => [SavedPlaceCreateManyInput], {nullable:false})
    @Type(() => SavedPlaceCreateManyInput)
    data!: Array<SavedPlaceCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSavedPlaceArgs {
    @Field(() => SavedPlaceCreateInput, {nullable:false})
    @Type(() => SavedPlaceCreateInput)
    data!: InstanceType<typeof SavedPlaceCreateInput>;
}

@ArgsType()
export class DeleteManySavedPlaceArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
}

@ArgsType()
export class DeleteOneSavedPlaceArgs {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
}

@ArgsType()
export class FindFirstSavedPlaceOrThrowArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedPlaceOrderByWithRelationInput>;
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedPlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedPlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstSavedPlaceArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedPlaceOrderByWithRelationInput>;
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedPlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedPlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindManySavedPlaceArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedPlaceOrderByWithRelationInput>;
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedPlaceScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedPlaceScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueSavedPlaceOrThrowArgs {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
}

@ArgsType()
export class FindUniqueSavedPlaceArgs {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
}

@ArgsType()
export class SavedPlaceAggregateArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedPlaceOrderByWithRelationInput>;
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SavedPlaceCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedPlaceCountAggregateInput>;
    @Field(() => SavedPlaceMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedPlaceMinAggregateInput>;
    @Field(() => SavedPlaceMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedPlaceMaxAggregateInput>;
}

@InputType()
export class SavedPlaceCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SavedPlaceCountAggregate {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    placeId!: number;
    @Field(() => Int, {nullable:false})
    savedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SavedPlaceCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedPlaceCreateManyPlaceInputEnvelope {
    @Field(() => [SavedPlaceCreateManyPlaceInput], {nullable:false})
    @Type(() => SavedPlaceCreateManyPlaceInput)
    data!: Array<SavedPlaceCreateManyPlaceInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SavedPlaceCreateManyPlaceInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceCreateManyUserInputEnvelope {
    @Field(() => [SavedPlaceCreateManyUserInput], {nullable:false})
    @Type(() => SavedPlaceCreateManyUserInput)
    data!: Array<SavedPlaceCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SavedPlaceCreateManyUserInput {
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceCreateManyInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceCreateNestedManyWithoutPlaceInput {
    @Field(() => [SavedPlaceCreateWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create?: Array<SavedPlaceCreateWithoutPlaceInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyPlaceInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
}

@InputType()
export class SavedPlaceCreateNestedManyWithoutUserInput {
    @Field(() => [SavedPlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create?: Array<SavedPlaceCreateWithoutUserInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutUserInput>;
    @Field(() => SavedPlaceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyUserInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
}

@InputType()
export class SavedPlaceCreateOrConnectWithoutPlaceInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceCreateWithoutPlaceInput, {nullable:false})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create!: InstanceType<typeof SavedPlaceCreateWithoutPlaceInput>;
}

@InputType()
export class SavedPlaceCreateOrConnectWithoutUserInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceCreateWithoutUserInput, {nullable:false})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create!: InstanceType<typeof SavedPlaceCreateWithoutUserInput>;
}

@InputType()
export class SavedPlaceCreateWithoutPlaceInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSavedPlacesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSavedPlacesInput>;
}

@InputType()
export class SavedPlaceCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => PlaceCreateNestedOneWithoutSavedByInput, {nullable:false})
    place!: InstanceType<typeof PlaceCreateNestedOneWithoutSavedByInput>;
}

@InputType()
export class SavedPlaceCreateInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSavedPlacesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSavedPlacesInput>;
    @Field(() => PlaceCreateNestedOneWithoutSavedByInput, {nullable:false})
    place!: InstanceType<typeof PlaceCreateNestedOneWithoutSavedByInput>;
}

@ArgsType()
export class SavedPlaceGroupByArgs {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SavedPlaceOrderByWithAggregationInput>;
    @Field(() => [SavedPlaceScalarFieldEnum], {nullable:false})
    by!: Array<`${SavedPlaceScalarFieldEnum}`>;
    @Field(() => SavedPlaceScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SavedPlaceScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SavedPlaceCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedPlaceCountAggregateInput>;
    @Field(() => SavedPlaceMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedPlaceMinAggregateInput>;
    @Field(() => SavedPlaceMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedPlaceMaxAggregateInput>;
}

@ObjectType()
export class SavedPlaceGroupBy {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:false})
    savedAt!: Date | string;
    @Field(() => SavedPlaceCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SavedPlaceCountAggregate>;
    @Field(() => SavedPlaceMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SavedPlaceMinAggregate>;
    @Field(() => SavedPlaceMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SavedPlaceMaxAggregate>;
}

@InputType()
export class SavedPlaceListRelationFilter {
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    every?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    some?: InstanceType<typeof SavedPlaceWhereInput>;
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    none?: InstanceType<typeof SavedPlaceWhereInput>;
}

@InputType()
export class SavedPlaceMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
}

@ObjectType()
export class SavedPlaceMaxAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedPlaceMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
}

@ObjectType()
export class SavedPlaceMinAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedPlaceOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class SavedPlaceOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
    @Field(() => SavedPlaceCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedPlaceCountOrderByAggregateInput>;
    @Field(() => SavedPlaceMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedPlaceMaxOrderByAggregateInput>;
    @Field(() => SavedPlaceMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedPlaceMinOrderByAggregateInput>;
}

@InputType()
export class SavedPlaceOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: InstanceType<typeof PlaceOrderByWithRelationInput>;
}

@InputType()
export class SavedPlaceScalarWhereWithAggregatesInput {
    @Field(() => [SavedPlaceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SavedPlaceScalarWhereWithAggregatesInput>;
    @Field(() => [SavedPlaceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SavedPlaceScalarWhereWithAggregatesInput>;
    @Field(() => [SavedPlaceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SavedPlaceScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    placeId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SavedPlaceScalarWhereInput {
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    AND?: Array<SavedPlaceScalarWhereInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    OR?: Array<SavedPlaceScalarWhereInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    NOT?: Array<SavedPlaceScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SavedPlaceUncheckedCreateNestedManyWithoutPlaceInput {
    @Field(() => [SavedPlaceCreateWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create?: Array<SavedPlaceCreateWithoutPlaceInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyPlaceInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
}

@InputType()
export class SavedPlaceUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [SavedPlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create?: Array<SavedPlaceCreateWithoutUserInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutUserInput>;
    @Field(() => SavedPlaceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyUserInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
}

@InputType()
export class SavedPlaceUncheckedCreateWithoutPlaceInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedPlaceUncheckedUpdateManyWithoutPlaceNestedInput {
    @Field(() => [SavedPlaceCreateWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create?: Array<SavedPlaceCreateWithoutPlaceInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutPlaceInput>;
    @Field(() => [SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyPlaceInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [SavedPlaceUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<SavedPlaceUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    @Type(() => SavedPlaceScalarWhereInput)
    deleteMany?: Array<SavedPlaceScalarWhereInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateManyWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [SavedPlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create?: Array<SavedPlaceCreateWithoutUserInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutUserInput>;
    @Field(() => [SavedPlaceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SavedPlaceUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SavedPlaceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyUserInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SavedPlaceUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SavedPlaceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SavedPlaceUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    @Type(() => SavedPlaceScalarWhereInput)
    deleteMany?: Array<SavedPlaceScalarWhereInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedPlaceUpdateManyWithWhereWithoutPlaceInput {
    @Field(() => SavedPlaceScalarWhereInput, {nullable:false})
    @Type(() => SavedPlaceScalarWhereInput)
    where!: InstanceType<typeof SavedPlaceScalarWhereInput>;
    @Field(() => SavedPlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedPlaceUpdateManyMutationInput)
    data!: InstanceType<typeof SavedPlaceUpdateManyMutationInput>;
}

@InputType()
export class SavedPlaceUpdateManyWithWhereWithoutUserInput {
    @Field(() => SavedPlaceScalarWhereInput, {nullable:false})
    @Type(() => SavedPlaceScalarWhereInput)
    where!: InstanceType<typeof SavedPlaceScalarWhereInput>;
    @Field(() => SavedPlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedPlaceUpdateManyMutationInput)
    data!: InstanceType<typeof SavedPlaceUpdateManyMutationInput>;
}

@InputType()
export class SavedPlaceUpdateManyWithoutPlaceNestedInput {
    @Field(() => [SavedPlaceCreateWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create?: Array<SavedPlaceCreateWithoutPlaceInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutPlaceInput>;
    @Field(() => [SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyPlaceInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [SavedPlaceUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => SavedPlaceUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<SavedPlaceUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    @Type(() => SavedPlaceScalarWhereInput)
    deleteMany?: Array<SavedPlaceScalarWhereInput>;
}

@InputType()
export class SavedPlaceUpdateManyWithoutUserNestedInput {
    @Field(() => [SavedPlaceCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create?: Array<SavedPlaceCreateWithoutUserInput>;
    @Field(() => [SavedPlaceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedPlaceCreateOrConnectWithoutUserInput>;
    @Field(() => [SavedPlaceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SavedPlaceUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SavedPlaceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedPlaceCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedPlaceCreateManyUserInputEnvelope>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceWhereUniqueInput], {nullable:true})
    @Type(() => SavedPlaceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>>;
    @Field(() => [SavedPlaceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SavedPlaceUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SavedPlaceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SavedPlaceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SavedPlaceUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SavedPlaceScalarWhereInput], {nullable:true})
    @Type(() => SavedPlaceScalarWhereInput)
    deleteMany?: Array<SavedPlaceScalarWhereInput>;
}

@InputType()
export class SavedPlaceUpdateWithWhereUniqueWithoutPlaceInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => SavedPlaceUpdateWithoutPlaceInput)
    data!: InstanceType<typeof SavedPlaceUpdateWithoutPlaceInput>;
}

@InputType()
export class SavedPlaceUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceUpdateWithoutUserInput, {nullable:false})
    @Type(() => SavedPlaceUpdateWithoutUserInput)
    data!: InstanceType<typeof SavedPlaceUpdateWithoutUserInput>;
}

@InputType()
export class SavedPlaceUpdateWithoutPlaceInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutSavedPlacesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSavedPlacesNestedInput>;
}

@InputType()
export class SavedPlaceUpdateWithoutUserInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateOneRequiredWithoutSavedByNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneRequiredWithoutSavedByNestedInput>;
}

@InputType()
export class SavedPlaceUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutSavedPlacesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSavedPlacesNestedInput>;
    @Field(() => PlaceUpdateOneRequiredWithoutSavedByNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneRequiredWithoutSavedByNestedInput>;
}

@InputType()
export class SavedPlaceUpsertWithWhereUniqueWithoutPlaceInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => SavedPlaceUpdateWithoutPlaceInput)
    update!: InstanceType<typeof SavedPlaceUpdateWithoutPlaceInput>;
    @Field(() => SavedPlaceCreateWithoutPlaceInput, {nullable:false})
    @Type(() => SavedPlaceCreateWithoutPlaceInput)
    create!: InstanceType<typeof SavedPlaceCreateWithoutPlaceInput>;
}

@InputType()
export class SavedPlaceUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceUpdateWithoutUserInput, {nullable:false})
    @Type(() => SavedPlaceUpdateWithoutUserInput)
    update!: InstanceType<typeof SavedPlaceUpdateWithoutUserInput>;
    @Field(() => SavedPlaceCreateWithoutUserInput, {nullable:false})
    @Type(() => SavedPlaceCreateWithoutUserInput)
    create!: InstanceType<typeof SavedPlaceCreateWithoutUserInput>;
}

@InputType()
export class SavedPlaceUserIdPlaceIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
}

@InputType()
export class SavedPlaceWhereUniqueInput {
    @Field(() => SavedPlaceUserIdPlaceIdCompoundUniqueInput, {nullable:true})
    userId_placeId?: InstanceType<typeof SavedPlaceUserIdPlaceIdCompoundUniqueInput>;
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    AND?: Array<SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    OR?: Array<SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    NOT?: Array<SavedPlaceWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => PlaceRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceRelationFilter>;
}

@InputType()
export class SavedPlaceWhereInput {
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    AND?: Array<SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    OR?: Array<SavedPlaceWhereInput>;
    @Field(() => [SavedPlaceWhereInput], {nullable:true})
    NOT?: Array<SavedPlaceWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    placeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => PlaceRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceRelationFilter>;
}

@ObjectType()
export class SavedPlace {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
    @Field(() => Date, {nullable:false})
    savedAt!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Place, {nullable:false})
    place?: InstanceType<typeof Place>;
}

@ArgsType()
export class UpdateManySavedPlaceArgs {
    @Field(() => SavedPlaceUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedPlaceUpdateManyMutationInput)
    data!: InstanceType<typeof SavedPlaceUpdateManyMutationInput>;
    @Field(() => SavedPlaceWhereInput, {nullable:true})
    @Type(() => SavedPlaceWhereInput)
    where?: InstanceType<typeof SavedPlaceWhereInput>;
}

@ArgsType()
export class UpdateOneSavedPlaceArgs {
    @Field(() => SavedPlaceUpdateInput, {nullable:false})
    @Type(() => SavedPlaceUpdateInput)
    data!: InstanceType<typeof SavedPlaceUpdateInput>;
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
}

@ArgsType()
export class UpsertOneSavedPlaceArgs {
    @Field(() => SavedPlaceWhereUniqueInput, {nullable:false})
    @Type(() => SavedPlaceWhereUniqueInput)
    where!: Prisma.AtLeast<SavedPlaceWhereUniqueInput, 'userId_placeId'>;
    @Field(() => SavedPlaceCreateInput, {nullable:false})
    @Type(() => SavedPlaceCreateInput)
    create!: InstanceType<typeof SavedPlaceCreateInput>;
    @Field(() => SavedPlaceUpdateInput, {nullable:false})
    @Type(() => SavedPlaceUpdateInput)
    update!: InstanceType<typeof SavedPlaceUpdateInput>;
}

@ObjectType()
export class AggregateSavedRecipe {
    @Field(() => SavedRecipeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SavedRecipeCountAggregate>;
    @Field(() => SavedRecipeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SavedRecipeMinAggregate>;
    @Field(() => SavedRecipeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SavedRecipeMaxAggregate>;
}

@ArgsType()
export class CreateManySavedRecipeArgs {
    @Field(() => [SavedRecipeCreateManyInput], {nullable:false})
    @Type(() => SavedRecipeCreateManyInput)
    data!: Array<SavedRecipeCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneSavedRecipeArgs {
    @Field(() => SavedRecipeCreateInput, {nullable:false})
    @Type(() => SavedRecipeCreateInput)
    data!: InstanceType<typeof SavedRecipeCreateInput>;
}

@ArgsType()
export class DeleteManySavedRecipeArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
}

@ArgsType()
export class DeleteOneSavedRecipeArgs {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
}

@ArgsType()
export class FindFirstSavedRecipeOrThrowArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedRecipeOrderByWithRelationInput>;
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedRecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedRecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstSavedRecipeArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedRecipeOrderByWithRelationInput>;
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedRecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedRecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindManySavedRecipeArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedRecipeOrderByWithRelationInput>;
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [SavedRecipeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SavedRecipeScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueSavedRecipeOrThrowArgs {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
}

@ArgsType()
export class FindUniqueSavedRecipeArgs {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
}

@ArgsType()
export class SavedRecipeAggregateArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SavedRecipeOrderByWithRelationInput>;
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SavedRecipeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedRecipeCountAggregateInput>;
    @Field(() => SavedRecipeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedRecipeMinAggregateInput>;
    @Field(() => SavedRecipeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedRecipeMaxAggregateInput>;
}

@InputType()
export class SavedRecipeCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class SavedRecipeCountAggregate {
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    recipeId!: number;
    @Field(() => Int, {nullable:false})
    savedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class SavedRecipeCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedRecipeCreateManyRecipeInputEnvelope {
    @Field(() => [SavedRecipeCreateManyRecipeInput], {nullable:false})
    @Type(() => SavedRecipeCreateManyRecipeInput)
    data!: Array<SavedRecipeCreateManyRecipeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SavedRecipeCreateManyRecipeInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeCreateManyUserInputEnvelope {
    @Field(() => [SavedRecipeCreateManyUserInput], {nullable:false})
    @Type(() => SavedRecipeCreateManyUserInput)
    data!: Array<SavedRecipeCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class SavedRecipeCreateManyUserInput {
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeCreateManyInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeCreateNestedManyWithoutRecipeInput {
    @Field(() => [SavedRecipeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create?: Array<SavedRecipeCreateWithoutRecipeInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutRecipeInput>;
    @Field(() => SavedRecipeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyRecipeInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
}

@InputType()
export class SavedRecipeCreateNestedManyWithoutUserInput {
    @Field(() => [SavedRecipeCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create?: Array<SavedRecipeCreateWithoutUserInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutUserInput>;
    @Field(() => SavedRecipeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyUserInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
}

@InputType()
export class SavedRecipeCreateOrConnectWithoutRecipeInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeCreateWithoutRecipeInput, {nullable:false})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create!: InstanceType<typeof SavedRecipeCreateWithoutRecipeInput>;
}

@InputType()
export class SavedRecipeCreateOrConnectWithoutUserInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeCreateWithoutUserInput, {nullable:false})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create!: InstanceType<typeof SavedRecipeCreateWithoutUserInput>;
}

@InputType()
export class SavedRecipeCreateWithoutRecipeInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSavedRecipesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSavedRecipesInput>;
}

@InputType()
export class SavedRecipeCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => RecipeCreateNestedOneWithoutSavedByInput, {nullable:false})
    recipe!: InstanceType<typeof RecipeCreateNestedOneWithoutSavedByInput>;
}

@InputType()
export class SavedRecipeCreateInput {
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutSavedRecipesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutSavedRecipesInput>;
    @Field(() => RecipeCreateNestedOneWithoutSavedByInput, {nullable:false})
    recipe!: InstanceType<typeof RecipeCreateNestedOneWithoutSavedByInput>;
}

@ArgsType()
export class SavedRecipeGroupByArgs {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SavedRecipeOrderByWithAggregationInput>;
    @Field(() => [SavedRecipeScalarFieldEnum], {nullable:false})
    by!: Array<`${SavedRecipeScalarFieldEnum}`>;
    @Field(() => SavedRecipeScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof SavedRecipeScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => SavedRecipeCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedRecipeCountAggregateInput>;
    @Field(() => SavedRecipeMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedRecipeMinAggregateInput>;
    @Field(() => SavedRecipeMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedRecipeMaxAggregateInput>;
}

@ObjectType()
export class SavedRecipeGroupBy {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:false})
    savedAt!: Date | string;
    @Field(() => SavedRecipeCountAggregate, {nullable:true})
    _count?: InstanceType<typeof SavedRecipeCountAggregate>;
    @Field(() => SavedRecipeMinAggregate, {nullable:true})
    _min?: InstanceType<typeof SavedRecipeMinAggregate>;
    @Field(() => SavedRecipeMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof SavedRecipeMaxAggregate>;
}

@InputType()
export class SavedRecipeListRelationFilter {
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    every?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    some?: InstanceType<typeof SavedRecipeWhereInput>;
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    none?: InstanceType<typeof SavedRecipeWhereInput>;
}

@InputType()
export class SavedRecipeMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
}

@ObjectType()
export class SavedRecipeMaxAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedRecipeMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    savedAt?: true;
}

@ObjectType()
export class SavedRecipeMinAggregate {
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
}

@InputType()
export class SavedRecipeOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class SavedRecipeOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
    @Field(() => SavedRecipeCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof SavedRecipeCountOrderByAggregateInput>;
    @Field(() => SavedRecipeMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof SavedRecipeMaxOrderByAggregateInput>;
    @Field(() => SavedRecipeMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof SavedRecipeMinOrderByAggregateInput>;
}

@InputType()
export class SavedRecipeOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    savedAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeOrderByWithRelationInput>;
}

@InputType()
export class SavedRecipeScalarWhereWithAggregatesInput {
    @Field(() => [SavedRecipeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SavedRecipeScalarWhereWithAggregatesInput>;
    @Field(() => [SavedRecipeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SavedRecipeScalarWhereWithAggregatesInput>;
    @Field(() => [SavedRecipeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SavedRecipeScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SavedRecipeScalarWhereInput {
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    AND?: Array<SavedRecipeScalarWhereInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    OR?: Array<SavedRecipeScalarWhereInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    NOT?: Array<SavedRecipeScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SavedRecipeUncheckedCreateNestedManyWithoutRecipeInput {
    @Field(() => [SavedRecipeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create?: Array<SavedRecipeCreateWithoutRecipeInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutRecipeInput>;
    @Field(() => SavedRecipeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyRecipeInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
}

@InputType()
export class SavedRecipeUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [SavedRecipeCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create?: Array<SavedRecipeCreateWithoutUserInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutUserInput>;
    @Field(() => SavedRecipeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyUserInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
}

@InputType()
export class SavedRecipeUncheckedCreateWithoutRecipeInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeUncheckedCreateInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;
}

@InputType()
export class SavedRecipeUncheckedUpdateManyWithoutRecipeNestedInput {
    @Field(() => [SavedRecipeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create?: Array<SavedRecipeCreateWithoutRecipeInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutRecipeInput>;
    @Field(() => [SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => SavedRecipeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyRecipeInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [SavedRecipeUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<SavedRecipeUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    @Type(() => SavedRecipeScalarWhereInput)
    deleteMany?: Array<SavedRecipeScalarWhereInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateManyWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [SavedRecipeCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create?: Array<SavedRecipeCreateWithoutUserInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutUserInput>;
    @Field(() => [SavedRecipeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SavedRecipeUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SavedRecipeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyUserInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SavedRecipeUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SavedRecipeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SavedRecipeUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    @Type(() => SavedRecipeScalarWhereInput)
    deleteMany?: Array<SavedRecipeScalarWhereInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUpdateManyMutationInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SavedRecipeUpdateManyWithWhereWithoutRecipeInput {
    @Field(() => SavedRecipeScalarWhereInput, {nullable:false})
    @Type(() => SavedRecipeScalarWhereInput)
    where!: InstanceType<typeof SavedRecipeScalarWhereInput>;
    @Field(() => SavedRecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedRecipeUpdateManyMutationInput)
    data!: InstanceType<typeof SavedRecipeUpdateManyMutationInput>;
}

@InputType()
export class SavedRecipeUpdateManyWithWhereWithoutUserInput {
    @Field(() => SavedRecipeScalarWhereInput, {nullable:false})
    @Type(() => SavedRecipeScalarWhereInput)
    where!: InstanceType<typeof SavedRecipeScalarWhereInput>;
    @Field(() => SavedRecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedRecipeUpdateManyMutationInput)
    data!: InstanceType<typeof SavedRecipeUpdateManyMutationInput>;
}

@InputType()
export class SavedRecipeUpdateManyWithoutRecipeNestedInput {
    @Field(() => [SavedRecipeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create?: Array<SavedRecipeCreateWithoutRecipeInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutRecipeInput>;
    @Field(() => [SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => SavedRecipeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyRecipeInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [SavedRecipeUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => SavedRecipeUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<SavedRecipeUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    @Type(() => SavedRecipeScalarWhereInput)
    deleteMany?: Array<SavedRecipeScalarWhereInput>;
}

@InputType()
export class SavedRecipeUpdateManyWithoutUserNestedInput {
    @Field(() => [SavedRecipeCreateWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create?: Array<SavedRecipeCreateWithoutUserInput>;
    @Field(() => [SavedRecipeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SavedRecipeCreateOrConnectWithoutUserInput>;
    @Field(() => [SavedRecipeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SavedRecipeUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => SavedRecipeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SavedRecipeCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof SavedRecipeCreateManyUserInputEnvelope>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeWhereUniqueInput], {nullable:true})
    @Type(() => SavedRecipeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>>;
    @Field(() => [SavedRecipeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SavedRecipeUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [SavedRecipeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SavedRecipeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SavedRecipeUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [SavedRecipeScalarWhereInput], {nullable:true})
    @Type(() => SavedRecipeScalarWhereInput)
    deleteMany?: Array<SavedRecipeScalarWhereInput>;
}

@InputType()
export class SavedRecipeUpdateWithWhereUniqueWithoutRecipeInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => SavedRecipeUpdateWithoutRecipeInput)
    data!: InstanceType<typeof SavedRecipeUpdateWithoutRecipeInput>;
}

@InputType()
export class SavedRecipeUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeUpdateWithoutUserInput, {nullable:false})
    @Type(() => SavedRecipeUpdateWithoutUserInput)
    data!: InstanceType<typeof SavedRecipeUpdateWithoutUserInput>;
}

@InputType()
export class SavedRecipeUpdateWithoutRecipeInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutSavedRecipesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSavedRecipesNestedInput>;
}

@InputType()
export class SavedRecipeUpdateWithoutUserInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateOneRequiredWithoutSavedByNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneRequiredWithoutSavedByNestedInput>;
}

@InputType()
export class SavedRecipeUpdateInput {
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutSavedRecipesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutSavedRecipesNestedInput>;
    @Field(() => RecipeUpdateOneRequiredWithoutSavedByNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneRequiredWithoutSavedByNestedInput>;
}

@InputType()
export class SavedRecipeUpsertWithWhereUniqueWithoutRecipeInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => SavedRecipeUpdateWithoutRecipeInput)
    update!: InstanceType<typeof SavedRecipeUpdateWithoutRecipeInput>;
    @Field(() => SavedRecipeCreateWithoutRecipeInput, {nullable:false})
    @Type(() => SavedRecipeCreateWithoutRecipeInput)
    create!: InstanceType<typeof SavedRecipeCreateWithoutRecipeInput>;
}

@InputType()
export class SavedRecipeUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeUpdateWithoutUserInput, {nullable:false})
    @Type(() => SavedRecipeUpdateWithoutUserInput)
    update!: InstanceType<typeof SavedRecipeUpdateWithoutUserInput>;
    @Field(() => SavedRecipeCreateWithoutUserInput, {nullable:false})
    @Type(() => SavedRecipeCreateWithoutUserInput)
    create!: InstanceType<typeof SavedRecipeCreateWithoutUserInput>;
}

@InputType()
export class SavedRecipeUserIdRecipeIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
}

@InputType()
export class SavedRecipeWhereUniqueInput {
    @Field(() => SavedRecipeUserIdRecipeIdCompoundUniqueInput, {nullable:true})
    userId_recipeId?: InstanceType<typeof SavedRecipeUserIdRecipeIdCompoundUniqueInput>;
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    AND?: Array<SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    OR?: Array<SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    NOT?: Array<SavedRecipeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeRelationFilter>;
}

@InputType()
export class SavedRecipeWhereInput {
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    AND?: Array<SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    OR?: Array<SavedRecipeWhereInput>;
    @Field(() => [SavedRecipeWhereInput], {nullable:true})
    NOT?: Array<SavedRecipeWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    savedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeRelationFilter>;
}

@ObjectType()
export class SavedRecipe {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
    @Field(() => Date, {nullable:false})
    savedAt!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Recipe, {nullable:false})
    recipe?: InstanceType<typeof Recipe>;
}

@ArgsType()
export class UpdateManySavedRecipeArgs {
    @Field(() => SavedRecipeUpdateManyMutationInput, {nullable:false})
    @Type(() => SavedRecipeUpdateManyMutationInput)
    data!: InstanceType<typeof SavedRecipeUpdateManyMutationInput>;
    @Field(() => SavedRecipeWhereInput, {nullable:true})
    @Type(() => SavedRecipeWhereInput)
    where?: InstanceType<typeof SavedRecipeWhereInput>;
}

@ArgsType()
export class UpdateOneSavedRecipeArgs {
    @Field(() => SavedRecipeUpdateInput, {nullable:false})
    @Type(() => SavedRecipeUpdateInput)
    data!: InstanceType<typeof SavedRecipeUpdateInput>;
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
}

@ArgsType()
export class UpsertOneSavedRecipeArgs {
    @Field(() => SavedRecipeWhereUniqueInput, {nullable:false})
    @Type(() => SavedRecipeWhereUniqueInput)
    where!: Prisma.AtLeast<SavedRecipeWhereUniqueInput, 'userId_recipeId'>;
    @Field(() => SavedRecipeCreateInput, {nullable:false})
    @Type(() => SavedRecipeCreateInput)
    create!: InstanceType<typeof SavedRecipeCreateInput>;
    @Field(() => SavedRecipeUpdateInput, {nullable:false})
    @Type(() => SavedRecipeUpdateInput)
    update!: InstanceType<typeof SavedRecipeUpdateInput>;
}

@ObjectType()
export class AggregateTag {
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@ArgsType()
export class CreateManyTagArgs {
    @Field(() => [TagCreateManyInput], {nullable:false})
    @Type(() => TagCreateManyInput)
    data!: Array<TagCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTagArgs {
    @Field(() => TagCreateInput, {nullable:false})
    @Type(() => TagCreateInput)
    data!: InstanceType<typeof TagCreateInput>;
}

@ArgsType()
export class DeleteManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
}

@ArgsType()
export class DeleteOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindFirstTagOrThrowArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyTagArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TagScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueTagOrThrowArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class FindUniqueTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class TagAggregateArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithRelationInput>;
    @Field(() => TagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@InputType()
export class TagCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TagCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    type!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TagCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
}

@ObjectType()
export class TagCount {
    @Field(() => Int, {nullable:false})
    recipes?: number;
    @Field(() => Int, {nullable:false})
    places?: number;
}

@InputType()
export class TagCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
}

@InputType()
export class TagCreateNestedManyWithoutPlacesInput {
    @Field(() => [TagCreateWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateWithoutPlacesInput)
    create?: Array<TagCreateWithoutPlacesInput>;
    @Field(() => [TagCreateOrConnectWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPlacesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class TagCreateNestedManyWithoutRecipesInput {
    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;
    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class TagCreateOrConnectWithoutPlacesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagCreateWithoutPlacesInput, {nullable:false})
    @Type(() => TagCreateWithoutPlacesInput)
    create!: InstanceType<typeof TagCreateWithoutPlacesInput>;
}

@InputType()
export class TagCreateOrConnectWithoutRecipesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => TagCreateWithoutRecipesInput)
    create!: InstanceType<typeof TagCreateWithoutRecipesInput>;
}

@InputType()
export class TagCreateWithoutPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => RecipeCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => PlaceCreateNestedManyWithoutTagsInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => RecipeCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutTagsInput>;
    @Field(() => PlaceCreateNestedManyWithoutTagsInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutTagsInput>;
}

@ArgsType()
export class TagGroupByArgs {
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
    @Field(() => [TagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TagOrderByWithAggregationInput>;
    @Field(() => [TagScalarFieldEnum], {nullable:false})
    by!: Array<`${TagScalarFieldEnum}`>;
    @Field(() => TagScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TagScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TagCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregateInput>;
    @Field(() => TagMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregateInput>;
    @Field(() => TagMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregateInput>;
}

@ObjectType()
export class TagGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => TagCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TagCountAggregate>;
    @Field(() => TagMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TagMinAggregate>;
    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TagMaxAggregate>;
}

@InputType()
export class TagListRelationFilter {
    @Field(() => TagWhereInput, {nullable:true})
    every?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    some?: InstanceType<typeof TagWhereInput>;
    @Field(() => TagWhereInput, {nullable:true})
    none?: InstanceType<typeof TagWhereInput>;
}

@InputType()
export class TagMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
}

@ObjectType()
export class TagMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    type?: string;
}

@InputType()
export class TagMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
}

@InputType()
export class TagMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    type?: true;
}

@ObjectType()
export class TagMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    type?: string;
}

@InputType()
export class TagMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
}

@InputType()
export class TagOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class TagOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => TagCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TagCountOrderByAggregateInput>;
    @Field(() => TagMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TagMaxOrderByAggregateInput>;
    @Field(() => TagMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TagMinOrderByAggregateInput>;
}

@InputType()
export class TagOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    type?: `${SortOrder}`;
    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeOrderByRelationAggregateInput>;
    @Field(() => PlaceOrderByRelationAggregateInput, {nullable:true})
    places?: InstanceType<typeof PlaceOrderByRelationAggregateInput>;
}

@InputType()
export class TagScalarWhereWithAggregatesInput {
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => [TagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TagScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    type?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class TagScalarWhereInput {
    @Field(() => [TagScalarWhereInput], {nullable:true})
    AND?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    OR?: Array<TagScalarWhereInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    NOT?: Array<TagScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
}

@InputType()
export class TagUncheckedCreateNestedManyWithoutPlacesInput {
    @Field(() => [TagCreateWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateWithoutPlacesInput)
    create?: Array<TagCreateWithoutPlacesInput>;
    @Field(() => [TagCreateOrConnectWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPlacesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class TagUncheckedCreateNestedManyWithoutRecipesInput {
    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;
    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
}

@InputType()
export class TagUncheckedCreateWithoutPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagUncheckedCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutTagsInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutTagsInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutTagsInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutPlacesNestedInput {
    @Field(() => [TagCreateWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateWithoutPlacesInput)
    create?: Array<TagCreateWithoutPlacesInput>;
    @Field(() => [TagCreateOrConnectWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPlacesInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutPlacesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutPlacesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutPlacesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutPlacesInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutPlacesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutPlacesInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutRecipesNestedInput {
    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;
    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUncheckedUpdateManyWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUncheckedUpdateWithoutPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUncheckedUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutTagsNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutTagsNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class TagUpdateManyWithWhereWithoutPlacesInput {
    @Field(() => TagScalarWhereInput, {nullable:false})
    @Type(() => TagScalarWhereInput)
    where!: InstanceType<typeof TagScalarWhereInput>;
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
}

@InputType()
export class TagUpdateManyWithWhereWithoutRecipesInput {
    @Field(() => TagScalarWhereInput, {nullable:false})
    @Type(() => TagScalarWhereInput)
    where!: InstanceType<typeof TagScalarWhereInput>;
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
}

@InputType()
export class TagUpdateManyWithoutPlacesNestedInput {
    @Field(() => [TagCreateWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateWithoutPlacesInput)
    create?: Array<TagCreateWithoutPlacesInput>;
    @Field(() => [TagCreateOrConnectWithoutPlacesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutPlacesInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutPlacesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutPlacesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutPlacesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutPlacesInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutPlacesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutPlacesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutPlacesInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUpdateManyWithoutRecipesNestedInput {
    @Field(() => [TagCreateWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateWithoutRecipesInput)
    create?: Array<TagCreateWithoutRecipesInput>;
    @Field(() => [TagCreateOrConnectWithoutRecipesInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutRecipesInput>;
    @Field(() => [TagUpsertWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpsertWithWhereUniqueWithoutRecipesInput)
    upsert?: Array<TagUpsertWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>>;
    @Field(() => [TagUpdateWithWhereUniqueWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateWithWhereUniqueWithoutRecipesInput)
    update?: Array<TagUpdateWithWhereUniqueWithoutRecipesInput>;
    @Field(() => [TagUpdateManyWithWhereWithoutRecipesInput], {nullable:true})
    @Type(() => TagUpdateManyWithWhereWithoutRecipesInput)
    updateMany?: Array<TagUpdateManyWithWhereWithoutRecipesInput>;
    @Field(() => [TagScalarWhereInput], {nullable:true})
    @Type(() => TagScalarWhereInput)
    deleteMany?: Array<TagScalarWhereInput>;
}

@InputType()
export class TagUpdateWithWhereUniqueWithoutPlacesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagUpdateWithoutPlacesInput, {nullable:false})
    @Type(() => TagUpdateWithoutPlacesInput)
    data!: InstanceType<typeof TagUpdateWithoutPlacesInput>;
}

@InputType()
export class TagUpdateWithWhereUniqueWithoutRecipesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => TagUpdateWithoutRecipesInput)
    data!: InstanceType<typeof TagUpdateWithoutRecipesInput>;
}

@InputType()
export class TagUpdateWithoutPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => PlaceUpdateManyWithoutTagsNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateManyWithoutTagsNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutTagsNestedInput>;
    @Field(() => PlaceUpdateManyWithoutTagsNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutTagsNestedInput>;
}

@InputType()
export class TagUpsertWithWhereUniqueWithoutPlacesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagUpdateWithoutPlacesInput, {nullable:false})
    @Type(() => TagUpdateWithoutPlacesInput)
    update!: InstanceType<typeof TagUpdateWithoutPlacesInput>;
    @Field(() => TagCreateWithoutPlacesInput, {nullable:false})
    @Type(() => TagCreateWithoutPlacesInput)
    create!: InstanceType<typeof TagCreateWithoutPlacesInput>;
}

@InputType()
export class TagUpsertWithWhereUniqueWithoutRecipesInput {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => TagUpdateWithoutRecipesInput)
    update!: InstanceType<typeof TagUpdateWithoutRecipesInput>;
    @Field(() => TagCreateWithoutRecipesInput, {nullable:false})
    @Type(() => TagCreateWithoutRecipesInput)
    create!: InstanceType<typeof TagCreateWithoutRecipesInput>;
}

@InputType()
export class TagWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
    @Field(() => PlaceListRelationFilter, {nullable:true})
    places?: InstanceType<typeof PlaceListRelationFilter>;
}

@InputType()
export class TagWhereInput {
    @Field(() => [TagWhereInput], {nullable:true})
    AND?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    OR?: Array<TagWhereInput>;
    @Field(() => [TagWhereInput], {nullable:true})
    NOT?: Array<TagWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    type?: InstanceType<typeof StringFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
    @Field(() => PlaceListRelationFilter, {nullable:true})
    places?: InstanceType<typeof PlaceListRelationFilter>;
}

@ObjectType()
export class Tag {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    type!: string;
    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;
    @Field(() => [Place], {nullable:true})
    places?: Array<Place>;
    @Field(() => TagCount, {nullable:false})
    _count?: InstanceType<typeof TagCount>;
}

@ArgsType()
export class UpdateManyTagArgs {
    @Field(() => TagUpdateManyMutationInput, {nullable:false})
    @Type(() => TagUpdateManyMutationInput)
    data!: InstanceType<typeof TagUpdateManyMutationInput>;
    @Field(() => TagWhereInput, {nullable:true})
    @Type(() => TagWhereInput)
    where?: InstanceType<typeof TagWhereInput>;
}

@ArgsType()
export class UpdateOneTagArgs {
    @Field(() => TagUpdateInput, {nullable:false})
    @Type(() => TagUpdateInput)
    data!: InstanceType<typeof TagUpdateInput>;
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
}

@ArgsType()
export class UpsertOneTagArgs {
    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'name'>;
    @Field(() => TagCreateInput, {nullable:false})
    @Type(() => TagCreateInput)
    create!: InstanceType<typeof TagCreateInput>;
    @Field(() => TagUpdateInput, {nullable:false})
    @Type(() => TagUpdateInput)
    update!: InstanceType<typeof TagUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<`${UserScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    avatar!: number;
    @Field(() => Int, {nullable:false})
    isAnonymous!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatar?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAnonymous?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    refreshTokens?: number;
    @Field(() => Int, {nullable:false})
    verificationTokens?: number;
    @Field(() => Int, {nullable:false})
    recipes?: number;
    @Field(() => Int, {nullable:false})
    comments?: number;
    @Field(() => Int, {nullable:false})
    votes?: number;
    @Field(() => Int, {nullable:false})
    places?: number;
    @Field(() => Int, {nullable:false})
    savedRecipes?: number;
    @Field(() => Int, {nullable:false})
    savedPlaces?: number;
    @Field(() => Int, {nullable:false})
    allergens?: number;
    @Field(() => Int, {nullable:false})
    dietaryTags?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedManyWithoutAllergensInput {
    @Field(() => [UserCreateWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateWithoutAllergensInput)
    create?: Array<UserCreateWithoutAllergensInput>;
    @Field(() => [UserCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAllergensInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserCreateNestedManyWithoutDietaryTagsInput {
    @Field(() => [UserCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create?: Array<UserCreateWithoutDietaryTagsInput>;
    @Field(() => [UserCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserCreateNestedOneWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutPlacesInput {
    @Field(() => UserCreateWithoutPlacesInput, {nullable:true})
    @Type(() => UserCreateWithoutPlacesInput)
    create?: InstanceType<typeof UserCreateWithoutPlacesInput>;
    @Field(() => UserCreateOrConnectWithoutPlacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPlacesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutRecipesInput {
    @Field(() => UserCreateWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipesInput)
    create?: InstanceType<typeof UserCreateWithoutRecipesInput>;
    @Field(() => UserCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutRecipesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutRefreshTokensInput {
    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutRefreshTokensInput)
    create?: InstanceType<typeof UserCreateWithoutRefreshTokensInput>;
    @Field(() => UserCreateOrConnectWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefreshTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutRefreshTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutSavedPlacesInput {
    @Field(() => UserCreateWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserCreateWithoutSavedPlacesInput)
    create?: InstanceType<typeof UserCreateWithoutSavedPlacesInput>;
    @Field(() => UserCreateOrConnectWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedPlacesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSavedPlacesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutSavedRecipesInput {
    @Field(() => UserCreateWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutSavedRecipesInput)
    create?: InstanceType<typeof UserCreateWithoutSavedRecipesInput>;
    @Field(() => UserCreateOrConnectWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedRecipesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSavedRecipesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutVerificationTokensInput {
    @Field(() => UserCreateWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutVerificationTokensInput)
    create?: InstanceType<typeof UserCreateWithoutVerificationTokensInput>;
    @Field(() => UserCreateOrConnectWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVerificationTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVerificationTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateNestedOneWithoutVotesInput {
    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVotesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}

@InputType()
export class UserCreateOrConnectWithoutAllergensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutAllergensInput, {nullable:false})
    @Type(() => UserCreateWithoutAllergensInput)
    create!: InstanceType<typeof UserCreateWithoutAllergensInput>;
}

@InputType()
export class UserCreateOrConnectWithoutCommentsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutDietaryTagsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create!: InstanceType<typeof UserCreateWithoutDietaryTagsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPlacesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutPlacesInput, {nullable:false})
    @Type(() => UserCreateWithoutPlacesInput)
    create!: InstanceType<typeof UserCreateWithoutPlacesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutRecipesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipesInput)
    create!: InstanceType<typeof UserCreateWithoutRecipesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutRefreshTokensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutRefreshTokensInput)
    create!: InstanceType<typeof UserCreateWithoutRefreshTokensInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSavedPlacesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutSavedPlacesInput, {nullable:false})
    @Type(() => UserCreateWithoutSavedPlacesInput)
    create!: InstanceType<typeof UserCreateWithoutSavedPlacesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSavedRecipesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutSavedRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutSavedRecipesInput)
    create!: InstanceType<typeof UserCreateWithoutSavedRecipesInput>;
}

@InputType()
export class UserCreateOrConnectWithoutVerificationTokensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutVerificationTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutVerificationTokensInput)
    create!: InstanceType<typeof UserCreateWithoutVerificationTokensInput>;
}

@InputType()
export class UserCreateOrConnectWithoutVotesInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: InstanceType<typeof UserCreateWithoutVotesInput>;
}

@InputType()
export class UserCreateWithoutAllergensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutDietaryTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutRefreshTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutSavedPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutSavedRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutVerificationTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagCreateNestedManyWithoutUsersInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<`${UserScalarFieldEnum}`>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:false})
    isAnonymous!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserListRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    every?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    some?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    none?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatar?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAnonymous?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    avatar?: true;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    avatar?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    isAnonymous?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
}

@InputType()
export class UserOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    avatar?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    isAnonymous?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    name?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    avatar?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    isAnonymous?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;
    @Field(() => RefreshTokenOrderByRelationAggregateInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenOrderByRelationAggregateInput>;
    @Field(() => VerificationTokenOrderByRelationAggregateInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenOrderByRelationAggregateInput>;
    @Field(() => RecipeOrderByRelationAggregateInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeOrderByRelationAggregateInput>;
    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: InstanceType<typeof CommentOrderByRelationAggregateInput>;
    @Field(() => VoteOrderByRelationAggregateInput, {nullable:true})
    votes?: InstanceType<typeof VoteOrderByRelationAggregateInput>;
    @Field(() => PlaceOrderByRelationAggregateInput, {nullable:true})
    places?: InstanceType<typeof PlaceOrderByRelationAggregateInput>;
    @Field(() => SavedRecipeOrderByRelationAggregateInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeOrderByRelationAggregateInput>;
    @Field(() => SavedPlaceOrderByRelationAggregateInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceOrderByRelationAggregateInput>;
    @Field(() => AllergenOrderByRelationAggregateInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenOrderByRelationAggregateInput>;
    @Field(() => DietaryTagOrderByRelationAggregateInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserScalarWhereInput {
    @Field(() => [UserScalarWhereInput], {nullable:true})
    AND?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    OR?: Array<UserScalarWhereInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    NOT?: Array<UserScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutAllergensInput {
    @Field(() => [UserCreateWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateWithoutAllergensInput)
    create?: Array<UserCreateWithoutAllergensInput>;
    @Field(() => [UserCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAllergensInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserUncheckedCreateNestedManyWithoutDietaryTagsInput {
    @Field(() => [UserCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create?: Array<UserCreateWithoutDietaryTagsInput>;
    @Field(() => [UserCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}

@InputType()
export class UserUncheckedCreateWithoutAllergensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutCommentsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutDietaryTagsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutRefreshTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSavedPlacesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutSavedRecipesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutVerificationTokensInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateWithoutVotesInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => String, {nullable:true})
    avatar?: string;
    @Field(() => Boolean, {nullable:true})
    isAnonymous?: boolean;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => RefreshTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => VerificationTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => RecipeUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => CommentUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedCreateNestedManyWithoutAuthorInput>;
    @Field(() => VoteUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => PlaceUncheckedCreateNestedManyWithoutAddedByInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedCreateNestedManyWithoutAddedByInput>;
    @Field(() => SavedRecipeUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => SavedPlaceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedCreateNestedManyWithoutUserInput>;
    @Field(() => AllergenUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedCreateNestedManyWithoutUsersInput>;
    @Field(() => DietaryTagUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedCreateNestedManyWithoutUsersInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutAllergensNestedInput {
    @Field(() => [UserCreateWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateWithoutAllergensInput)
    create?: Array<UserCreateWithoutAllergensInput>;
    @Field(() => [UserCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAllergensInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutAllergensInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutAllergensInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutAllergensInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutAllergensInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutDietaryTagsNestedInput {
    @Field(() => [UserCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create?: Array<UserCreateWithoutDietaryTagsInput>;
    @Field(() => [UserCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutDietaryTagsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutDietaryTagsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutDietaryTagsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutDietaryTagsInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUncheckedUpdateManyWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutRefreshTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSavedPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutSavedRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutVerificationTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUncheckedUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUncheckedUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUncheckedUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUncheckedUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUncheckedUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUncheckedUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutAllergensInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    @Type(() => UserScalarWhereInput)
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithWhereWithoutDietaryTagsInput {
    @Field(() => UserScalarWhereInput, {nullable:false})
    @Type(() => UserScalarWhereInput)
    where!: InstanceType<typeof UserScalarWhereInput>;
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
}

@InputType()
export class UserUpdateManyWithoutAllergensNestedInput {
    @Field(() => [UserCreateWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateWithoutAllergensInput)
    create?: Array<UserCreateWithoutAllergensInput>;
    @Field(() => [UserCreateOrConnectWithoutAllergensInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAllergensInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutAllergensInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutAllergensInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutAllergensInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutAllergensInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutAllergensInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutAllergensInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutAllergensInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateManyWithoutDietaryTagsNestedInput {
    @Field(() => [UserCreateWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create?: Array<UserCreateWithoutDietaryTagsInput>;
    @Field(() => [UserCreateOrConnectWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDietaryTagsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutDietaryTagsInput>;
    @Field(() => [UserUpsertWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutDietaryTagsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
    @Field(() => [UserUpdateWithWhereUniqueWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutDietaryTagsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutDietaryTagsInput>;
    @Field(() => [UserUpdateManyWithWhereWithoutDietaryTagsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutDietaryTagsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutDietaryTagsInput>;
    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutCommentsNestedInput {
    @Field(() => UserCreateWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutCommentsInput)
    create?: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserCreateOrConnectWithoutCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCommentsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutCommentsInput>;
    @Field(() => UserUpsertWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCommentsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutCommentsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutCommentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCommentsInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutCommentsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutPlacesNestedInput {
    @Field(() => UserCreateWithoutPlacesInput, {nullable:true})
    @Type(() => UserCreateWithoutPlacesInput)
    create?: InstanceType<typeof UserCreateWithoutPlacesInput>;
    @Field(() => UserCreateOrConnectWithoutPlacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPlacesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPlacesInput>;
    @Field(() => UserUpsertWithoutPlacesInput, {nullable:true})
    @Type(() => UserUpsertWithoutPlacesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPlacesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutPlacesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutPlacesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutPlacesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutRecipesNestedInput {
    @Field(() => UserCreateWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutRecipesInput)
    create?: InstanceType<typeof UserCreateWithoutRecipesInput>;
    @Field(() => UserCreateOrConnectWithoutRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRecipesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutRecipesInput>;
    @Field(() => UserUpsertWithoutRecipesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRecipesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutRecipesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutRecipesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRecipesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutRecipesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutRefreshTokensNestedInput {
    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutRefreshTokensInput)
    create?: InstanceType<typeof UserCreateWithoutRefreshTokensInput>;
    @Field(() => UserCreateOrConnectWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefreshTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutRefreshTokensInput>;
    @Field(() => UserUpsertWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutRefreshTokensInput)
    upsert?: InstanceType<typeof UserUpsertWithoutRefreshTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutRefreshTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRefreshTokensInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutRefreshTokensInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSavedPlacesNestedInput {
    @Field(() => UserCreateWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserCreateWithoutSavedPlacesInput)
    create?: InstanceType<typeof UserCreateWithoutSavedPlacesInput>;
    @Field(() => UserCreateOrConnectWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedPlacesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSavedPlacesInput>;
    @Field(() => UserUpsertWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserUpsertWithoutSavedPlacesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSavedPlacesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutSavedPlacesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSavedPlacesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSavedPlacesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutSavedRecipesNestedInput {
    @Field(() => UserCreateWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserCreateWithoutSavedRecipesInput)
    create?: InstanceType<typeof UserCreateWithoutSavedRecipesInput>;
    @Field(() => UserCreateOrConnectWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutSavedRecipesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutSavedRecipesInput>;
    @Field(() => UserUpsertWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserUpsertWithoutSavedRecipesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutSavedRecipesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutSavedRecipesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutSavedRecipesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSavedRecipesInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutVerificationTokensNestedInput {
    @Field(() => UserCreateWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutVerificationTokensInput)
    create?: InstanceType<typeof UserCreateWithoutVerificationTokensInput>;
    @Field(() => UserCreateOrConnectWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVerificationTokensInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVerificationTokensInput>;
    @Field(() => UserUpsertWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutVerificationTokensInput)
    upsert?: InstanceType<typeof UserUpsertWithoutVerificationTokensInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutVerificationTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVerificationTokensInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutVerificationTokensInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutVotesNestedInput {
    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutVotesInput>;
    @Field(() => UserUpsertWithoutVotesInput, {nullable:true})
    @Type(() => UserUpsertWithoutVotesInput)
    upsert?: InstanceType<typeof UserUpsertWithoutVotesInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateToOneWithWhereWithoutVotesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutVotesInput)
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutVotesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentsInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    data!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutPlacesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutPlacesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlacesInput)
    data!: InstanceType<typeof UserUpdateWithoutPlacesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutRecipesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipesInput)
    data!: InstanceType<typeof UserUpdateWithoutRecipesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutRefreshTokensInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutRefreshTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefreshTokensInput)
    data!: InstanceType<typeof UserUpdateWithoutRefreshTokensInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutSavedPlacesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutSavedPlacesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSavedPlacesInput)
    data!: InstanceType<typeof UserUpdateWithoutSavedPlacesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutSavedRecipesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutSavedRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSavedRecipesInput)
    data!: InstanceType<typeof UserUpdateWithoutSavedRecipesInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutVerificationTokensInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutVerificationTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutVerificationTokensInput)
    data!: InstanceType<typeof UserUpdateWithoutVerificationTokensInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutVotesInput {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    data!: InstanceType<typeof UserUpdateWithoutVotesInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutAllergensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateWithoutAllergensInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllergensInput)
    data!: InstanceType<typeof UserUpdateWithoutAllergensInput>;
}

@InputType()
export class UserUpdateWithWhereUniqueWithoutDietaryTagsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDietaryTagsInput)
    data!: InstanceType<typeof UserUpdateWithoutDietaryTagsInput>;
}

@InputType()
export class UserUpdateWithoutAllergensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutCommentsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutDietaryTagsInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutRefreshTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutSavedPlacesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutSavedRecipesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutVerificationTokensInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateWithoutVotesInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    avatar?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RefreshTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => VerificationTokenUpdateManyWithoutUserNestedInput, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenUpdateManyWithoutUserNestedInput>;
    @Field(() => RecipeUpdateManyWithoutAuthorNestedInput, {nullable:true})
    recipes?: InstanceType<typeof RecipeUpdateManyWithoutAuthorNestedInput>;
    @Field(() => CommentUpdateManyWithoutAuthorNestedInput, {nullable:true})
    comments?: InstanceType<typeof CommentUpdateManyWithoutAuthorNestedInput>;
    @Field(() => VoteUpdateManyWithoutUserNestedInput, {nullable:true})
    votes?: InstanceType<typeof VoteUpdateManyWithoutUserNestedInput>;
    @Field(() => PlaceUpdateManyWithoutAddedByNestedInput, {nullable:true})
    places?: InstanceType<typeof PlaceUpdateManyWithoutAddedByNestedInput>;
    @Field(() => SavedRecipeUpdateManyWithoutUserNestedInput, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeUpdateManyWithoutUserNestedInput>;
    @Field(() => SavedPlaceUpdateManyWithoutUserNestedInput, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceUpdateManyWithoutUserNestedInput>;
    @Field(() => AllergenUpdateManyWithoutUsersNestedInput, {nullable:true})
    allergens?: InstanceType<typeof AllergenUpdateManyWithoutUsersNestedInput>;
    @Field(() => DietaryTagUpdateManyWithoutUsersNestedInput, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagUpdateManyWithoutUsersNestedInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutAllergensInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateWithoutAllergensInput, {nullable:false})
    @Type(() => UserUpdateWithoutAllergensInput)
    update!: InstanceType<typeof UserUpdateWithoutAllergensInput>;
    @Field(() => UserCreateWithoutAllergensInput, {nullable:false})
    @Type(() => UserCreateWithoutAllergensInput)
    create!: InstanceType<typeof UserCreateWithoutAllergensInput>;
}

@InputType()
export class UserUpsertWithWhereUniqueWithoutDietaryTagsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
    @Field(() => UserUpdateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => UserUpdateWithoutDietaryTagsInput)
    update!: InstanceType<typeof UserUpdateWithoutDietaryTagsInput>;
    @Field(() => UserCreateWithoutDietaryTagsInput, {nullable:false})
    @Type(() => UserCreateWithoutDietaryTagsInput)
    create!: InstanceType<typeof UserCreateWithoutDietaryTagsInput>;
}

@InputType()
export class UserUpsertWithoutCommentsInput {
    @Field(() => UserUpdateWithoutCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentsInput)
    update!: InstanceType<typeof UserUpdateWithoutCommentsInput>;
    @Field(() => UserCreateWithoutCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentsInput)
    create!: InstanceType<typeof UserCreateWithoutCommentsInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutPlacesInput {
    @Field(() => UserUpdateWithoutPlacesInput, {nullable:false})
    @Type(() => UserUpdateWithoutPlacesInput)
    update!: InstanceType<typeof UserUpdateWithoutPlacesInput>;
    @Field(() => UserCreateWithoutPlacesInput, {nullable:false})
    @Type(() => UserCreateWithoutPlacesInput)
    create!: InstanceType<typeof UserCreateWithoutPlacesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutRecipesInput {
    @Field(() => UserUpdateWithoutRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutRecipesInput)
    update!: InstanceType<typeof UserUpdateWithoutRecipesInput>;
    @Field(() => UserCreateWithoutRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutRecipesInput)
    create!: InstanceType<typeof UserCreateWithoutRecipesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutRefreshTokensInput {
    @Field(() => UserUpdateWithoutRefreshTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutRefreshTokensInput)
    update!: InstanceType<typeof UserUpdateWithoutRefreshTokensInput>;
    @Field(() => UserCreateWithoutRefreshTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutRefreshTokensInput)
    create!: InstanceType<typeof UserCreateWithoutRefreshTokensInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutSavedPlacesInput {
    @Field(() => UserUpdateWithoutSavedPlacesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSavedPlacesInput)
    update!: InstanceType<typeof UserUpdateWithoutSavedPlacesInput>;
    @Field(() => UserCreateWithoutSavedPlacesInput, {nullable:false})
    @Type(() => UserCreateWithoutSavedPlacesInput)
    create!: InstanceType<typeof UserCreateWithoutSavedPlacesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutSavedRecipesInput {
    @Field(() => UserUpdateWithoutSavedRecipesInput, {nullable:false})
    @Type(() => UserUpdateWithoutSavedRecipesInput)
    update!: InstanceType<typeof UserUpdateWithoutSavedRecipesInput>;
    @Field(() => UserCreateWithoutSavedRecipesInput, {nullable:false})
    @Type(() => UserCreateWithoutSavedRecipesInput)
    create!: InstanceType<typeof UserCreateWithoutSavedRecipesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutVerificationTokensInput {
    @Field(() => UserUpdateWithoutVerificationTokensInput, {nullable:false})
    @Type(() => UserUpdateWithoutVerificationTokensInput)
    update!: InstanceType<typeof UserUpdateWithoutVerificationTokensInput>;
    @Field(() => UserCreateWithoutVerificationTokensInput, {nullable:false})
    @Type(() => UserCreateWithoutVerificationTokensInput)
    create!: InstanceType<typeof UserCreateWithoutVerificationTokensInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutVotesInput {
    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    update!: InstanceType<typeof UserUpdateWithoutVotesInput>;
    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: InstanceType<typeof UserCreateWithoutVotesInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenListRelationFilter>;
    @Field(() => VerificationTokenListRelationFilter, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => PlaceListRelationFilter, {nullable:true})
    places?: InstanceType<typeof PlaceListRelationFilter>;
    @Field(() => SavedRecipeListRelationFilter, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeListRelationFilter>;
    @Field(() => SavedPlaceListRelationFilter, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceListRelationFilter>;
    @Field(() => AllergenListRelationFilter, {nullable:true})
    allergens?: InstanceType<typeof AllergenListRelationFilter>;
    @Field(() => DietaryTagListRelationFilter, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagListRelationFilter>;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    name?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    avatar?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    isAnonymous?: InstanceType<typeof BoolFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => RefreshTokenListRelationFilter, {nullable:true})
    refreshTokens?: InstanceType<typeof RefreshTokenListRelationFilter>;
    @Field(() => VerificationTokenListRelationFilter, {nullable:true})
    verificationTokens?: InstanceType<typeof VerificationTokenListRelationFilter>;
    @Field(() => RecipeListRelationFilter, {nullable:true})
    recipes?: InstanceType<typeof RecipeListRelationFilter>;
    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: InstanceType<typeof CommentListRelationFilter>;
    @Field(() => VoteListRelationFilter, {nullable:true})
    votes?: InstanceType<typeof VoteListRelationFilter>;
    @Field(() => PlaceListRelationFilter, {nullable:true})
    places?: InstanceType<typeof PlaceListRelationFilter>;
    @Field(() => SavedRecipeListRelationFilter, {nullable:true})
    savedRecipes?: InstanceType<typeof SavedRecipeListRelationFilter>;
    @Field(() => SavedPlaceListRelationFilter, {nullable:true})
    savedPlaces?: InstanceType<typeof SavedPlaceListRelationFilter>;
    @Field(() => AllergenListRelationFilter, {nullable:true})
    allergens?: InstanceType<typeof AllergenListRelationFilter>;
    @Field(() => DietaryTagListRelationFilter, {nullable:true})
    dietaryTags?: InstanceType<typeof DietaryTagListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @Field(() => String, {nullable:true})
    avatar!: string | null;
    @Field(() => Boolean, {defaultValue:false,nullable:false})
    isAnonymous!: boolean;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => [RefreshToken], {nullable:true})
    refreshTokens?: Array<RefreshToken>;
    @Field(() => [VerificationToken], {nullable:true})
    verificationTokens?: Array<VerificationToken>;
    @Field(() => [Recipe], {nullable:true})
    recipes?: Array<Recipe>;
    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;
    @Field(() => [Vote], {nullable:true})
    votes?: Array<Vote>;
    @Field(() => [Place], {nullable:true})
    places?: Array<Place>;
    @Field(() => [SavedRecipe], {nullable:true})
    savedRecipes?: Array<SavedRecipe>;
    @Field(() => [SavedPlace], {nullable:true})
    savedPlaces?: Array<SavedPlace>;
    @Field(() => [Allergen], {nullable:true})
    allergens?: Array<Allergen>;
    @Field(() => [DietaryTag], {nullable:true})
    dietaryTags?: Array<DietaryTag>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

@ObjectType()
export class AggregateVerificationToken {
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@ArgsType()
export class CreateManyVerificationTokenArgs {
    @Field(() => [VerificationTokenCreateManyInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyInput)
    data!: Array<VerificationTokenCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVerificationTokenArgs {
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    data!: InstanceType<typeof VerificationTokenCreateInput>;
}

@ArgsType()
export class DeleteManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class DeleteOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindFirstVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyVerificationTokenArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VerificationTokenScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class FindUniqueVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class UpdateManyVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
}

@ArgsType()
export class UpdateOneVerificationTokenArgs {
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    data!: InstanceType<typeof VerificationTokenUpdateInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
}

@ArgsType()
export class UpsertOneVerificationTokenArgs {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => VerificationTokenCreateInput, {nullable:false})
    @Type(() => VerificationTokenCreateInput)
    create!: InstanceType<typeof VerificationTokenCreateInput>;
    @Field(() => VerificationTokenUpdateInput, {nullable:false})
    @Type(() => VerificationTokenUpdateInput)
    update!: InstanceType<typeof VerificationTokenUpdateInput>;
}

@ArgsType()
export class VerificationTokenAggregateArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithRelationInput>;
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@InputType()
export class VerificationTokenCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VerificationTokenCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    token!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    expiresAt!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenCreateManyUserInputEnvelope {
    @Field(() => [VerificationTokenCreateManyUserInput], {nullable:false})
    @Type(() => VerificationTokenCreateManyUserInput)
    data!: Array<VerificationTokenCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VerificationTokenCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenCreateNestedManyWithoutUserInput {
    @Field(() => [VerificationTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create?: Array<VerificationTokenCreateWithoutUserInput>;
    @Field(() => [VerificationTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerificationTokenCreateOrConnectWithoutUserInput>;
    @Field(() => VerificationTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerificationTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VerificationTokenCreateManyUserInputEnvelope>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class VerificationTokenCreateOrConnectWithoutUserInput {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => VerificationTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create!: InstanceType<typeof VerificationTokenCreateWithoutUserInput>;
}

@InputType()
export class VerificationTokenCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVerificationTokensInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutVerificationTokensInput>;
}

@ArgsType()
export class VerificationTokenGroupByArgs {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    @Type(() => VerificationTokenWhereInput)
    where?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;
    @Field(() => [VerificationTokenScalarFieldEnum], {nullable:false})
    by!: Array<`${VerificationTokenScalarFieldEnum}`>;
    @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VerificationTokenCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregateInput>;
    @Field(() => VerificationTokenMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregateInput>;
    @Field(() => VerificationTokenMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregateInput>;
}

@ObjectType()
export class VerificationTokenGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => VerificationTokenCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountAggregate>;
    @Field(() => VerificationTokenMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinAggregate>;
    @Field(() => VerificationTokenMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxAggregate>;
}

@InputType()
export class VerificationTokenListRelationFilter {
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    every?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    some?: InstanceType<typeof VerificationTokenWhereInput>;
    @Field(() => VerificationTokenWhereInput, {nullable:true})
    none?: InstanceType<typeof VerificationTokenWhereInput>;
}

@InputType()
export class VerificationTokenMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class VerificationTokenMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    token?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    expiresAt?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}

@ObjectType()
export class VerificationTokenMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => VerificationTokenCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
    @Field(() => VerificationTokenMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
    @Field(() => VerificationTokenMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    token?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    expiresAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenScalarWhereInput {
    @Field(() => [VerificationTokenScalarWhereInput], {nullable:true})
    AND?: Array<VerificationTokenScalarWhereInput>;
    @Field(() => [VerificationTokenScalarWhereInput], {nullable:true})
    OR?: Array<VerificationTokenScalarWhereInput>;
    @Field(() => [VerificationTokenScalarWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [VerificationTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create?: Array<VerificationTokenCreateWithoutUserInput>;
    @Field(() => [VerificationTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerificationTokenCreateOrConnectWithoutUserInput>;
    @Field(() => VerificationTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerificationTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VerificationTokenCreateManyUserInputEnvelope>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
}

@InputType()
export class VerificationTokenUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [VerificationTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create?: Array<VerificationTokenCreateWithoutUserInput>;
    @Field(() => [VerificationTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerificationTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [VerificationTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VerificationTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VerificationTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerificationTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VerificationTokenCreateManyUserInputEnvelope>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VerificationTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VerificationTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VerificationTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VerificationTokenScalarWhereInput], {nullable:true})
    @Type(() => VerificationTokenScalarWhereInput)
    deleteMany?: Array<VerificationTokenScalarWhereInput>;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUpdateManyWithWhereWithoutUserInput {
    @Field(() => VerificationTokenScalarWhereInput, {nullable:false})
    @Type(() => VerificationTokenScalarWhereInput)
    where!: InstanceType<typeof VerificationTokenScalarWhereInput>;
    @Field(() => VerificationTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => VerificationTokenUpdateManyMutationInput)
    data!: InstanceType<typeof VerificationTokenUpdateManyMutationInput>;
}

@InputType()
export class VerificationTokenUpdateManyWithoutUserNestedInput {
    @Field(() => [VerificationTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create?: Array<VerificationTokenCreateWithoutUserInput>;
    @Field(() => [VerificationTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VerificationTokenCreateOrConnectWithoutUserInput>;
    @Field(() => [VerificationTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VerificationTokenUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VerificationTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VerificationTokenCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VerificationTokenCreateManyUserInputEnvelope>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenWhereUniqueInput], {nullable:true})
    @Type(() => VerificationTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>>;
    @Field(() => [VerificationTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VerificationTokenUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VerificationTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VerificationTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VerificationTokenUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VerificationTokenScalarWhereInput], {nullable:true})
    @Type(() => VerificationTokenScalarWhereInput)
    deleteMany?: Array<VerificationTokenScalarWhereInput>;
}

@InputType()
export class VerificationTokenUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => VerificationTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => VerificationTokenUpdateWithoutUserInput)
    data!: InstanceType<typeof VerificationTokenUpdateWithoutUserInput>;
}

@InputType()
export class VerificationTokenUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutVerificationTokensNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutVerificationTokensNestedInput>;
}

@InputType()
export class VerificationTokenUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => VerificationTokenWhereUniqueInput, {nullable:false})
    @Type(() => VerificationTokenWhereUniqueInput)
    where!: Prisma.AtLeast<VerificationTokenWhereUniqueInput, 'id' | 'token'>;
    @Field(() => VerificationTokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => VerificationTokenUpdateWithoutUserInput)
    update!: InstanceType<typeof VerificationTokenUpdateWithoutUserInput>;
    @Field(() => VerificationTokenCreateWithoutUserInput, {nullable:false})
    @Type(() => VerificationTokenCreateWithoutUserInput)
    create!: InstanceType<typeof VerificationTokenCreateWithoutUserInput>;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    token?: string;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class VerificationTokenWhereInput {
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    AND?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    OR?: Array<VerificationTokenWhereInput>;
    @Field(() => [VerificationTokenWhereInput], {nullable:true})
    NOT?: Array<VerificationTokenWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    token?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class VerificationToken {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    token!: string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    expiresAt!: Date;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
}

@ObjectType()
export class AggregateVote {
    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregate>;
    @Field(() => VoteAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof VoteAvgAggregate>;
    @Field(() => VoteSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof VoteSumAggregate>;
    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregate>;
    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregate>;
}

@ArgsType()
export class CreateManyVoteArgs {
    @Field(() => [VoteCreateManyInput], {nullable:false})
    @Type(() => VoteCreateManyInput)
    data!: Array<VoteCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneVoteArgs {
    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    data!: InstanceType<typeof VoteCreateInput>;
}

@ArgsType()
export class DeleteManyVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
}

@ArgsType()
export class DeleteOneVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
}

@ArgsType()
export class FindFirstVoteOrThrowArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindFirstVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindManyVoteArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [VoteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${VoteScalarFieldEnum}`>;
}

@ArgsType()
export class FindUniqueVoteOrThrowArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
}

@ArgsType()
export class FindUniqueVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
}

@ArgsType()
export class UpdateManyVoteArgs {
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
}

@ArgsType()
export class UpdateOneVoteArgs {
    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    data!: InstanceType<typeof VoteUpdateInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
}

@ArgsType()
export class UpsertOneVoteArgs {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteCreateInput, {nullable:false})
    @Type(() => VoteCreateInput)
    create!: InstanceType<typeof VoteCreateInput>;
    @Field(() => VoteUpdateInput, {nullable:false})
    @Type(() => VoteUpdateInput)
    update!: InstanceType<typeof VoteUpdateInput>;
}

@ArgsType()
export class VoteAggregateArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithRelationInput>;
    @Field(() => VoteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VoteCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregateInput>;
    @Field(() => VoteAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof VoteAvgAggregateInput>;
    @Field(() => VoteSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof VoteSumAggregateInput>;
    @Field(() => VoteMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregateInput>;
    @Field(() => VoteMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregateInput>;
}

@InputType()
export class VoteAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class VoteAvgAggregate {
    @Field(() => Float, {nullable:true})
    value?: number;
}

@InputType()
export class VoteAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
}

@InputType()
export class VoteCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class VoteCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    userId!: number;
    @Field(() => Int, {nullable:false})
    recipeId!: number;
    @Field(() => Int, {nullable:false})
    placeId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class VoteCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class VoteCreateManyPlaceInputEnvelope {
    @Field(() => [VoteCreateManyPlaceInput], {nullable:false})
    @Type(() => VoteCreateManyPlaceInput)
    data!: Array<VoteCreateManyPlaceInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VoteCreateManyPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
}

@InputType()
export class VoteCreateManyRecipeInputEnvelope {
    @Field(() => [VoteCreateManyRecipeInput], {nullable:false})
    @Type(() => VoteCreateManyRecipeInput)
    data!: Array<VoteCreateManyRecipeInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VoteCreateManyRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteCreateManyUserInputEnvelope {
    @Field(() => [VoteCreateManyUserInput], {nullable:false})
    @Type(() => VoteCreateManyUserInput)
    data!: Array<VoteCreateManyUserInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class VoteCreateManyUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteCreateNestedManyWithoutPlaceInput {
    @Field(() => [VoteCreateWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateWithoutPlaceInput)
    create?: Array<VoteCreateWithoutPlaceInput>;
    @Field(() => [VoteCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPlaceInput>;
    @Field(() => VoteCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPlaceInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteCreateNestedManyWithoutRecipeInput {
    @Field(() => [VoteCreateWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateWithoutRecipeInput)
    create?: Array<VoteCreateWithoutRecipeInput>;
    @Field(() => [VoteCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutRecipeInput>;
    @Field(() => VoteCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyRecipeInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteCreateNestedManyWithoutUserInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteCreateOrConnectWithoutPlaceInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteCreateWithoutPlaceInput, {nullable:false})
    @Type(() => VoteCreateWithoutPlaceInput)
    create!: InstanceType<typeof VoteCreateWithoutPlaceInput>;
}

@InputType()
export class VoteCreateOrConnectWithoutRecipeInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteCreateWithoutRecipeInput, {nullable:false})
    @Type(() => VoteCreateWithoutRecipeInput)
    create!: InstanceType<typeof VoteCreateWithoutRecipeInput>;
}

@InputType()
export class VoteCreateOrConnectWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: InstanceType<typeof VoteCreateWithoutUserInput>;
}

@InputType()
export class VoteCreateWithoutPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutVotesInput>;
    @Field(() => RecipeCreateNestedOneWithoutVotesInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutVotesInput>;
}

@InputType()
export class VoteCreateWithoutRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutVotesInput>;
    @Field(() => PlaceCreateNestedOneWithoutVotesInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutVotesInput>;
}

@InputType()
export class VoteCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => RecipeCreateNestedOneWithoutVotesInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutVotesInput>;
    @Field(() => PlaceCreateNestedOneWithoutVotesInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutVotesInput>;
}

@InputType()
export class VoteCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: InstanceType<typeof UserCreateNestedOneWithoutVotesInput>;
    @Field(() => RecipeCreateNestedOneWithoutVotesInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeCreateNestedOneWithoutVotesInput>;
    @Field(() => PlaceCreateNestedOneWithoutVotesInput, {nullable:true})
    place?: InstanceType<typeof PlaceCreateNestedOneWithoutVotesInput>;
}

@ArgsType()
export class VoteGroupByArgs {
    @Field(() => VoteWhereInput, {nullable:true})
    @Type(() => VoteWhereInput)
    where?: InstanceType<typeof VoteWhereInput>;
    @Field(() => [VoteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VoteOrderByWithAggregationInput>;
    @Field(() => [VoteScalarFieldEnum], {nullable:false})
    by!: Array<`${VoteScalarFieldEnum}`>;
    @Field(() => VoteScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof VoteScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => VoteCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregateInput>;
    @Field(() => VoteAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof VoteAvgAggregateInput>;
    @Field(() => VoteSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof VoteSumAggregateInput>;
    @Field(() => VoteMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregateInput>;
    @Field(() => VoteMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregateInput>;
}

@ObjectType()
export class VoteGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
    @Field(() => VoteCountAggregate, {nullable:true})
    _count?: InstanceType<typeof VoteCountAggregate>;
    @Field(() => VoteAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof VoteAvgAggregate>;
    @Field(() => VoteSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof VoteSumAggregate>;
    @Field(() => VoteMinAggregate, {nullable:true})
    _min?: InstanceType<typeof VoteMinAggregate>;
    @Field(() => VoteMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof VoteMaxAggregate>;
}

@InputType()
export class VoteListRelationFilter {
    @Field(() => VoteWhereInput, {nullable:true})
    every?: InstanceType<typeof VoteWhereInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    some?: InstanceType<typeof VoteWhereInput>;
    @Field(() => VoteWhereInput, {nullable:true})
    none?: InstanceType<typeof VoteWhereInput>;
}

@InputType()
export class VoteMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
}

@ObjectType()
export class VoteMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class VoteMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    value?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    userId?: true;
    @Field(() => Boolean, {nullable:true})
    recipeId?: true;
    @Field(() => Boolean, {nullable:true})
    placeId?: true;
}

@ObjectType()
export class VoteMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:true})
    value?: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    userId?: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    recipeId?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    placeId?: `${SortOrder}`;
}

@InputType()
export class VoteOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}

@InputType()
export class VoteOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    placeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => VoteCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof VoteCountOrderByAggregateInput>;
    @Field(() => VoteAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof VoteAvgOrderByAggregateInput>;
    @Field(() => VoteMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof VoteMaxOrderByAggregateInput>;
    @Field(() => VoteMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof VoteMinOrderByAggregateInput>;
    @Field(() => VoteSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof VoteSumOrderByAggregateInput>;
}

@InputType()
export class VoteOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;
    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;
    @Field(() => SortOrderInput, {nullable:true})
    recipeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrderInput, {nullable:true})
    placeId?: InstanceType<typeof SortOrderInput>;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    @Field(() => RecipeOrderByWithRelationInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeOrderByWithRelationInput>;
    @Field(() => PlaceOrderByWithRelationInput, {nullable:true})
    place?: InstanceType<typeof PlaceOrderByWithRelationInput>;
}

@InputType()
export class VoteScalarWhereWithAggregatesInput {
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => [VoteScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VoteScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    value?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class VoteScalarWhereInput {
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    AND?: Array<VoteScalarWhereInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    OR?: Array<VoteScalarWhereInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    NOT?: Array<VoteScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    value?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class VoteSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    value?: true;
}

@ObjectType()
export class VoteSumAggregate {
    @Field(() => Int, {nullable:true})
    value?: number;
}

@InputType()
export class VoteSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;
}

@InputType()
export class VoteUncheckedCreateNestedManyWithoutPlaceInput {
    @Field(() => [VoteCreateWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateWithoutPlaceInput)
    create?: Array<VoteCreateWithoutPlaceInput>;
    @Field(() => [VoteCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPlaceInput>;
    @Field(() => VoteCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPlaceInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteUncheckedCreateNestedManyWithoutRecipeInput {
    @Field(() => [VoteCreateWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateWithoutRecipeInput)
    create?: Array<VoteCreateWithoutRecipeInput>;
    @Field(() => [VoteCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutRecipeInput>;
    @Field(() => VoteCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyRecipeInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteUncheckedCreateNestedManyWithoutUserInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
}

@InputType()
export class VoteUncheckedCreateWithoutPlaceInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
}

@InputType()
export class VoteUncheckedCreateWithoutRecipeInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId?: string;
    @Field(() => String, {nullable:true})
    placeId?: string;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutPlaceNestedInput {
    @Field(() => [VoteCreateWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateWithoutPlaceInput)
    create?: Array<VoteCreateWithoutPlaceInput>;
    @Field(() => [VoteCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPlaceInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => VoteCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPlaceInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutRecipeNestedInput {
    @Field(() => [VoteCreateWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateWithoutRecipeInput)
    create?: Array<VoteCreateWithoutRecipeInput>;
    @Field(() => [VoteCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutRecipeInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => VoteCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyRecipeInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutUserNestedInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUncheckedUpdateManyWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    recipeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    placeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VoteUpdateManyWithWhereWithoutPlaceInput {
    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: InstanceType<typeof VoteScalarWhereInput>;
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
}

@InputType()
export class VoteUpdateManyWithWhereWithoutRecipeInput {
    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: InstanceType<typeof VoteScalarWhereInput>;
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
}

@InputType()
export class VoteUpdateManyWithWhereWithoutUserInput {
    @Field(() => VoteScalarWhereInput, {nullable:false})
    @Type(() => VoteScalarWhereInput)
    where!: InstanceType<typeof VoteScalarWhereInput>;
    @Field(() => VoteUpdateManyMutationInput, {nullable:false})
    @Type(() => VoteUpdateManyMutationInput)
    data!: InstanceType<typeof VoteUpdateManyMutationInput>;
}

@InputType()
export class VoteUpdateManyWithoutPlaceNestedInput {
    @Field(() => [VoteCreateWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateWithoutPlaceInput)
    create?: Array<VoteCreateWithoutPlaceInput>;
    @Field(() => [VoteCreateOrConnectWithoutPlaceInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutPlaceInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutPlaceInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutPlaceInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutPlaceInput>;
    @Field(() => VoteCreateManyPlaceInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyPlaceInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyPlaceInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutPlaceInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutPlaceInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutPlaceInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutPlaceInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutPlaceInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUpdateManyWithoutRecipeNestedInput {
    @Field(() => [VoteCreateWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateWithoutRecipeInput)
    create?: Array<VoteCreateWithoutRecipeInput>;
    @Field(() => [VoteCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutRecipeInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutRecipeInput>;
    @Field(() => VoteCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyRecipeInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyRecipeInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutRecipeInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutRecipeInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUpdateManyWithoutUserNestedInput {
    @Field(() => [VoteCreateWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateWithoutUserInput)
    create?: Array<VoteCreateWithoutUserInput>;
    @Field(() => [VoteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VoteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VoteCreateOrConnectWithoutUserInput>;
    @Field(() => [VoteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VoteUpsertWithWhereUniqueWithoutUserInput>;
    @Field(() => VoteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VoteCreateManyUserInputEnvelope)
    createMany?: InstanceType<typeof VoteCreateManyUserInputEnvelope>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteWhereUniqueInput], {nullable:true})
    @Type(() => VoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>>;
    @Field(() => [VoteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VoteUpdateWithWhereUniqueWithoutUserInput>;
    @Field(() => [VoteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VoteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VoteUpdateManyWithWhereWithoutUserInput>;
    @Field(() => [VoteScalarWhereInput], {nullable:true})
    @Type(() => VoteScalarWhereInput)
    deleteMany?: Array<VoteScalarWhereInput>;
}

@InputType()
export class VoteUpdateWithWhereUniqueWithoutPlaceInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPlaceInput)
    data!: InstanceType<typeof VoteUpdateWithoutPlaceInput>;
}

@InputType()
export class VoteUpdateWithWhereUniqueWithoutRecipeInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => VoteUpdateWithoutRecipeInput)
    data!: InstanceType<typeof VoteUpdateWithoutRecipeInput>;
}

@InputType()
export class VoteUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    data!: InstanceType<typeof VoteUpdateWithoutUserInput>;
}

@InputType()
export class VoteUpdateWithoutPlaceInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutVotesNestedInput>;
    @Field(() => RecipeUpdateOneWithoutVotesNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpdateWithoutRecipeInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutVotesNestedInput>;
    @Field(() => PlaceUpdateOneWithoutVotesNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => RecipeUpdateOneWithoutVotesNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutVotesNestedInput>;
    @Field(() => PlaceUpdateOneWithoutVotesNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    value?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutVotesNestedInput>;
    @Field(() => RecipeUpdateOneWithoutVotesNestedInput, {nullable:true})
    recipe?: InstanceType<typeof RecipeUpdateOneWithoutVotesNestedInput>;
    @Field(() => PlaceUpdateOneWithoutVotesNestedInput, {nullable:true})
    place?: InstanceType<typeof PlaceUpdateOneWithoutVotesNestedInput>;
}

@InputType()
export class VoteUpsertWithWhereUniqueWithoutPlaceInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutPlaceInput, {nullable:false})
    @Type(() => VoteUpdateWithoutPlaceInput)
    update!: InstanceType<typeof VoteUpdateWithoutPlaceInput>;
    @Field(() => VoteCreateWithoutPlaceInput, {nullable:false})
    @Type(() => VoteCreateWithoutPlaceInput)
    create!: InstanceType<typeof VoteCreateWithoutPlaceInput>;
}

@InputType()
export class VoteUpsertWithWhereUniqueWithoutRecipeInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => VoteUpdateWithoutRecipeInput)
    update!: InstanceType<typeof VoteUpdateWithoutRecipeInput>;
    @Field(() => VoteCreateWithoutRecipeInput, {nullable:false})
    @Type(() => VoteCreateWithoutRecipeInput)
    create!: InstanceType<typeof VoteCreateWithoutRecipeInput>;
}

@InputType()
export class VoteUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => VoteWhereUniqueInput, {nullable:false})
    @Type(() => VoteWhereUniqueInput)
    where!: Prisma.AtLeast<VoteWhereUniqueInput, 'id' | 'userId_recipeId' | 'userId_placeId'>;
    @Field(() => VoteUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoteUpdateWithoutUserInput)
    update!: InstanceType<typeof VoteUpdateWithoutUserInput>;
    @Field(() => VoteCreateWithoutUserInput, {nullable:false})
    @Type(() => VoteCreateWithoutUserInput)
    create!: InstanceType<typeof VoteCreateWithoutUserInput>;
}

@InputType()
export class VoteUserIdPlaceIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    placeId!: string;
}

@InputType()
export class VoteUserIdRecipeIdCompoundUniqueInput {
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:false})
    recipeId!: string;
}

@InputType()
export class VoteWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => VoteUserIdRecipeIdCompoundUniqueInput, {nullable:true})
    userId_recipeId?: InstanceType<typeof VoteUserIdRecipeIdCompoundUniqueInput>;
    @Field(() => VoteUserIdPlaceIdCompoundUniqueInput, {nullable:true})
    userId_placeId?: InstanceType<typeof VoteUserIdPlaceIdCompoundUniqueInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    value?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeNullableRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeNullableRelationFilter>;
    @Field(() => PlaceNullableRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceNullableRelationFilter>;
}

@InputType()
export class VoteWhereInput {
    @Field(() => [VoteWhereInput], {nullable:true})
    AND?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    OR?: Array<VoteWhereInput>;
    @Field(() => [VoteWhereInput], {nullable:true})
    NOT?: Array<VoteWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => IntFilter, {nullable:true})
    value?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => StringFilter, {nullable:true})
    userId?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    recipeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    placeId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    user?: InstanceType<typeof UserRelationFilter>;
    @Field(() => RecipeNullableRelationFilter, {nullable:true})
    recipe?: InstanceType<typeof RecipeNullableRelationFilter>;
    @Field(() => PlaceNullableRelationFilter, {nullable:true})
    place?: InstanceType<typeof PlaceNullableRelationFilter>;
}

@ObjectType()
export class Vote {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Int, {nullable:false})
    value!: number;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => String, {nullable:true})
    recipeId!: string | null;
    @Field(() => String, {nullable:true})
    placeId!: string | null;
    @Field(() => User, {nullable:false})
    user?: InstanceType<typeof User>;
    @Field(() => Recipe, {nullable:true})
    recipe?: InstanceType<typeof Recipe> | null;
    @Field(() => Place, {nullable:true})
    place?: InstanceType<typeof Place> | null;
}
