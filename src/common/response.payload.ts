import { Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface IResponseType<T> {
  data: T;
  details: string;
  message: string;
}

export function CommonResponse<T>(classRef: Type<T>): Type<IResponseType<T>> {
  abstract class ResponseType implements IResponseType<T> {
    @ApiProperty({ type: classRef })
    data: T;

    @ApiProperty()
    details: string;

    @ApiProperty()
    message: string;
  }
  return ResponseType as unknown as Type<IResponseType<T>>;
}
