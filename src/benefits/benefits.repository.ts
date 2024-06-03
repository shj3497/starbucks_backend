import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PaginatedBenefitArgs } from './dto/paginated-benefit.args';

@Injectable()
export class BenefitsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(args: PaginatedBenefitArgs) {
    const { page, pageSize } = args;
    const take = pageSize;
    const skip = pageSize * (page - 1);

    return await this.prisma.$transaction(async (prisma) => {
      const nodes = await prisma.benefit.findMany({
        take,
        skip,
        include: {
          memberships: {
            select: {
              membership: {
                select: {
                  rank: true,
                },
              },
            },
          },
        },
      });
      const totalCount = await prisma.benefit.count();

      return {
        nodes,
        totalCount,
      };
    });
  }
}
