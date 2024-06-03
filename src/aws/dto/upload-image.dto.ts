import { ApiProperty } from '@nestjs/swagger';

export class UploadImageDto {
  @ApiProperty({
    description: '썸네일 이미지',
    format: 'binary',
    type: 'string',
    required: true,
  })
  file: Express.Multer.File;
}
