import { ApiProperty } from '@nestjs/swagger';
import { NewsType } from '@prisma/client';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { PaginationArgs } from 'src/common/pagination.args';

export class PaginatedNewsArgs extends PaginationArgs {
  @ApiProperty({ default: [NewsType.NEWS, NewsType.EVENT] })
  @IsOptional()
  @IsEnum(NewsType, { each: true })
  @IsArray()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value.split(',').map((type: string) => type.trim());
    }
    return value;
  })
  type?: NewsType[] = [NewsType.NEWS, NewsType.EVENT];

  // @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === 'string') {
      return value === 'true';
    }
    return value;
  })
  isHomeList?: boolean;
}
