import { Injectable } from '@nestjs/common';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { PaginatedBenefitArgs } from './dto/paginated-benefit.args';
import { BenefitsRepository } from './benefits.repository';
import { PaginatedBenefit } from './dto/paginated-benefit.dto';

@Injectable()
export class BenefitsService {
  constructor(private repository: BenefitsRepository) {}

  create(createBenefitDto: CreateBenefitDto) {
    return 'This action adds a new benefit';
  }

  async findAll(args: PaginatedBenefitArgs): Promise<PaginatedBenefit> {
    const { totalCount, nodes } = await this.repository.findAll(args);
    const hasNextPage = nodes ? args.page * args.pageSize < totalCount : false;
    const data = nodes.map(({ memberships, ...node }) => ({
      ...node,
      membership: memberships.map((_) => _.membership),
    }));

    return {
      nodes: data,
      hasNextPage,
      totalCount,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} benefit`;
  }

  update(id: number, updateBenefitDto: UpdateBenefitDto) {
    return `This action updates a #${id} benefit`;
  }

  remove(id: number) {
    return `This action removes a #${id} benefit`;
  }
}
