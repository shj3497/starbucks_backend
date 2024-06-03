import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PaginatedMenuArgs } from './dto/paginated-menu.args';
import { CommonMenuArgs } from './dto/common-menu.args';

@Injectable()
export class MenusRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(args: PaginatedMenuArgs) {
    const { page, pageSize } = args;
    const take = pageSize;
    const skip = pageSize * (page - 1);
    return await this.prisma.$transaction(async (prisma) => {
      const nodes = await prisma.menu.findMany({
        take,
        skip,
      });

      const totalCount = await prisma.menu.count();

      return {
        nodes,
        totalCount,
      };
    });
  }

  async findOne(id: number, args: CommonMenuArgs) {
    const { beverageId, foodId } = args;
    const menus = await this.prisma.menu.findUnique({
      where: {
        id,
      },
      include: {
        menuOptions: {
          select: {
            menu: {
              select: {
                beverages: {
                  select: {
                    id: true,
                    menuId: true,
                    name: true,
                    imgUrl: true,
                    isHot: true,
                    isIce: true,
                  },
                  orderBy: {
                    isHot: 'desc',
                  },
                },
              },
            },
          },
          where: {
            menuId: id,
          },
          take: 1,
        },
        beverages: {
          where: {
            id: beverageId,
          },
          orderBy: {
            isHot: 'desc',
          },
        },
        foods: {
          where: {
            id: foodId,
          },
        },
      },
    });

    return menus;
  }
}
