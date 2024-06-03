import { CommonResponse } from 'src/common/response.payload';
import { NewsEntity } from '../entities/news.entity';

export class NewsDto extends CommonResponse(NewsEntity) {}
