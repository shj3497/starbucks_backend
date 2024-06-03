import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { MenusRepository } from './menus.repository';
import { PaginatedMenuArgs } from './dto/paginated-menu.args';
import { PaginatedMenu } from './dto/paginated-menu.dto';
import { CommonMenu } from './dto/common-menu.dto';
import { CommonMenuArgs } from './dto/common-menu.args';

@Injectable()
export class MenusService {
  constructor(private repository: MenusRepository) {}

  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu';
  }

  async findAll(args: PaginatedMenuArgs): Promise<PaginatedMenu> {
    const { nodes, totalCount } = await this.repository.findAll(args);
    const hasNextPage = nodes ? args.page * args.pageSize < totalCount : false;

    return {
      nodes,
      totalCount,
      hasNextPage,
    };
  }

  async findOne(id: number, args: CommonMenuArgs): Promise<CommonMenu> {
    const menu = await this.repository.findOne(id, args);
    const data: CommonMenu['data'] = {
      ...menu,

      menuOptions: !Array.isArray(menu.menuOptions)
        ? []
        : menu.menuOptions[0].menu.beverages,
    };
    return {
      data,
      message: '',
      details: '',
    };
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
