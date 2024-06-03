import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AwsService } from './aws.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageDto } from './dto/upload-image.dto';
import { ImageDto } from './dto/image.dto';

@Controller('upload')
@ApiTags('upload')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Post()
  @ApiOperation({ operationId: 'uploadFile' })
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ type: ImageDto })
  uploadImage(
    @Body() uploadImageDto: UploadImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const dto: UploadImageDto = { ...uploadImageDto, file };
    return this.awsService.imageUpload(dto.file);
  }
}
