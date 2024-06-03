import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class PaginationArgs {
  @Transform(({ value }) => +value)
  @IsOptional()
  @IsNumber()
  page = 1;

  @Transform(({ value }) => +value)
  @IsOptional()
  @IsNumber()
  pageSize = 12;
}
