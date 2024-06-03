import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface IPaginatedType<T> {
  nodes: T[];
  totalCount: number;
  hasNextPage: boolean;
}

export function Paginated<T>(classRef: Type<T>): Type<IPaginatedType<T>> {
  // @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<T> {
    // @ApiProperty(() => [classRef])
    @ApiProperty({ type: [classRef] })
    nodes: T[];

    @ApiProperty()
    totalCount: number;

    @ApiProperty()
    hasNextPage: boolean;
  }
  return PaginatedType as unknown as Type<IPaginatedType<T>>;
}
