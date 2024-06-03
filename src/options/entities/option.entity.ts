import { ApiProperty } from '@nestjs/swagger';
import { Option } from '@prisma/client';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class OptionEntity implements Option {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty({ description: '옵션 이름' })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ nullable: true })
  name_en: string | null;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
