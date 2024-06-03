import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class CommonMenuArgs {
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  beverageId?: number;

  @IsOptional()
  @Transform(({ value }) => +value)
  @IsNumber()
  foodId?: number;
}
