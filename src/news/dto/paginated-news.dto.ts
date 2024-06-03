import { Paginated } from 'src/common/paginated.payload';
import { NewsEntity } from '../entities/news.entity';

export class PaginatedNews extends Paginated(NewsEntity) {}
