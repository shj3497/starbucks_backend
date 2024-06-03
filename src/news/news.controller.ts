import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedNews } from './dto/paginated-news.dto';
import { PaginatedNewsArgs } from './dto/paginated-news.args';
import { NewsDto } from './dto/news.dto';
import { NewsType } from '@prisma/client';

@Controller('news')
@ApiTags('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  // @Post()
  // create(@Body() createNewsDto: CreateNewsDto) {
  //   return this.newsService.create(createNewsDto);
  // }

  @Get()
  @ApiOperation({ operationId: 'news' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @ApiQuery({
    name: 'type',
    required: false,
    enum: NewsType,
    isArray: true,
    description:
      'Comma-separated list of news types, Default :: ["NEWS","EVENT"]',
  })
  @ApiQuery({
    name: 'isHomeList',
    required: false,
    type: Boolean,
    description: 'Default :: undefined',
  })
  @ApiResponse({ type: PaginatedNews })
  findAll(@Query() args: PaginatedNewsArgs) {
    return this.newsService.findAll(args);
  }

  @Get(':id')
  @ApiOperation({ operationId: 'newsItem' })
  @ApiResponse({ type: NewsDto })
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
  //   return this.newsService.update(+id, updateNewsDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.newsService.remove(+id);
  // }
}
