import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CommonResponse } from 'src/common/response.payload';

export class AwsImage {
  @IsString()
  @ApiProperty({ description: 's3 image url' })
  url: string;
}

export class ImageDto extends CommonResponse(AwsImage) {}
