import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PaginatedBeverageArgs } from './dto/paginated-beverage.args';

@Injectable()
export class BeveragesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(args: PaginatedBeverageArgs) {
    const { page, pageSize } = args;
    const take = pageSize;
    const skip = pageSize * (page - 1);

    return await this.prisma.$transaction(async (prisma) => {
      const nodes = await prisma.beverage.findMany({
        take,
        skip,
        include: {
          menu: {
            select: {
              id: true,
              name: true,
            },
          },
          options: {
            select: {
              option: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      const totalCount = await prisma.beverage.count();

      return { nodes, totalCount };
    });
  }

  async findOne(id: number) {
    return await this.prisma.beverage.findFirst({
      where: { id },
      include: {
        menu: {
          select: {
            id: true,
            name: true,
          },
        },
        options: {
          select: {
            option: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
