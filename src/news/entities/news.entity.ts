import { ApiProperty } from '@nestjs/swagger';
import { News, NewsType } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class NewsEntity implements News {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  description: string | null;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  thumbnail: string | null;

  @IsString()
  @ApiProperty()
  period: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true, required: false })
  content: string;

  @IsEnum(NewsType)
  @ApiProperty({ enum: NewsType })
  type: NewsType;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false, required: false })
  isFixed: boolean | null;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ default: false, required: false })
  isHomeList: boolean | null;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
