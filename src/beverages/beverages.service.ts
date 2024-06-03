import { Injectable } from '@nestjs/common';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { BeveragesRepository } from './beverages.repository';
import { PaginatedBeverageArgs } from './dto/paginated-beverage.args';
import { PaginatedBeverage } from './dto/paginated-beverage.dto';
import { BeverageDto } from './dto/beverage.dto';
import { CommonBeverageDto } from './dto/common-beverage.dto';

@Injectable()
export class BeveragesService {
  constructor(private repository: BeveragesRepository) {}

  create(createBeverageDto: CreateBeverageDto) {
    return 'This action adds a new beverage';
  }

  async findAll(args: PaginatedBeverageArgs): Promise<PaginatedBeverage> {
    const { totalCount, nodes: beverages } = await this.repository.findAll(
      args,
    );
    const nodes: BeverageDto[] = beverages.map((beverage) => ({
      ...beverage,
      options: beverage.options.map((option) => option.option),
    }));
    const hasNextPage = nodes ? args.page * args.pageSize < totalCount : false;

    return {
      nodes,
      totalCount,
      hasNextPage,
    };
  }

  async findOne(id: number): Promise<CommonBeverageDto> {
    const beverage = await this.repository.findOne(id);
    const data: BeverageDto = {
      ...beverage,
      options: beverage.options.map((option) => option.option),
    };

    return {
      data,
      details: '',
      message: '',
    };
  }

  update(id: number, updateBeverageDto: UpdateBeverageDto) {
    return `This action updates a #${id} beverage`;
  }

  remove(id: number) {
    return `This action removes a #${id} beverage`;
  }
}
