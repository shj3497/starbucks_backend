import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { PaginatedNewsArgs } from './dto/paginated-news.args';
import { NewsRepository } from './news.repository';
import { PaginatedNews } from './dto/paginated-news.dto';
import { NewsDto } from './dto/news.dto';

@Injectable()
export class NewsService {
  constructor(private repository: NewsRepository) {}

  create(createNewsDto: CreateNewsDto) {
    return 'This action adds a new news';
  }

  async findAll(args: PaginatedNewsArgs): Promise<PaginatedNews> {
    const { totalCount, nodes } = await this.repository.findAll(args);
    const hasNextPage = nodes ? args.page * args.pageSize < totalCount : false;

    return {
      nodes,
      totalCount,
      hasNextPage,
    };
  }

  async findOne(id: number): Promise<NewsDto> {
    const data = await this.repository.findOne(id);

    return {
      data,
      details: '',
      message: '',
    };
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    return `This action removes a #${id} news`;
  }
}
