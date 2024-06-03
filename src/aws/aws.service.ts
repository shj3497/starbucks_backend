import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { format } from 'date-fns';
import { ImageDto } from './dto/image.dto';

@Injectable()
export class AwsService {
  s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      },
    });
  }

  async imageUpload(file: Express.Multer.File): Promise<ImageDto> {
    const url = await this.imageUploadToS3(file);

    return {
      data: { url },
      message: '',
      details: '',
    };
  }

  async imageUploadToS3(
    file: Express.Multer.File, // 업로드할 파일
  ) {
    file.originalname = Buffer.from(file.originalname, 'ascii').toString(
      'utf-8',
    );
    // AWS S3에 이미지 업로드 명령을 생성합니다. 파일 이름, 파일 버퍼, 파일 접근 권한, 파일 타입 등을 설정합니다.
    const date = format(new Date(), 'yyyyMMddHHmmss');
    const fileName = `${date}_${file.originalname}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME, // S3 버킷 이름
      Key: `static/${fileName}`, // 업로드될 파일의 이름
      Body: file.buffer, // 업로드할 파일
      ACL: 'public-read', // 파일 접근 권한
      ContentType: file.mimetype, // 파일 타입
    });

    // 생성된 명령을 S3 클라이언트에 전달하여 이미지 업로드를 수행합니다.
    await this.s3Client.send(command);

    // 업로드된 이미지의 URL을 반환합니다.
    // https://mz-hjshim.s3.amazonaws.com/static/pentacle_logo.png
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/static/starbucks-upload/${fileName}`;
  }
}
