import { ApiProperty } from '@nestjs/swagger';
import { Menu } from '@prisma/client';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class MenuEntity implements Menu {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty({ description: '분류 이름' })
  name: string;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
