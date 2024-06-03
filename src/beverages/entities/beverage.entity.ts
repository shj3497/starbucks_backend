import { ApiProperty } from '@nestjs/swagger';
import { Beverage, BeverageCategory } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BeverageEntity implements Beverage {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNumber()
  @ApiProperty()
  menuId: number;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  name_en: string | null;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  price: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  notice: string | null;

  @IsString()
  @ApiProperty()
  imgUrl: string;

  @IsEnum(BeverageCategory)
  @ApiProperty({ enum: BeverageCategory, default: BeverageCategory.OTHERS })
  category: BeverageCategory;

  @IsBoolean()
  @ApiProperty({ default: false })
  isBest: boolean;

  @IsBoolean()
  @ApiProperty({ default: false })
  isNew: boolean;

  @IsBoolean()
  @ApiProperty({ default: false })
  isRecommended: boolean;

  @IsBoolean()
  @ApiProperty({ default: false })
  isHot: boolean;

  @IsBoolean()
  @ApiProperty({ default: false })
  isIce: boolean;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
