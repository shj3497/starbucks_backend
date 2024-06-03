import { PrismaService } from 'nestjs-prisma';
import { PaginatedNewsArgs } from './dto/paginated-news.args';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(args: PaginatedNewsArgs) {
    const { page, pageSize, type, isHomeList } = args;
    const take = pageSize;
    const skip = pageSize * (page - 1);

    return await this.prisma.$transaction(async (prisma) => {
      const nodes = await prisma.news.findMany({
        take,
        skip,
        where: {
          AND: { isHomeList },
          OR: type.map((item) => ({
            type: item,
          })),
        },
      });
      const totalCount = await prisma.news.count({
        where: {
          AND: { isHomeList },
          OR: type.map((item) => ({
            type: item,
          })),
        },
      });
      return { nodes, totalCount };
    });
  }

  async findOne(id: number) {
    return await this.prisma.news.findUnique({
      where: {
        id,
      },
    });
  }
}
