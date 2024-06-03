import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedMenu } from './dto/paginated-menu.dto';
import { PaginatedMenuArgs } from './dto/paginated-menu.args';
import { CommonMenu } from './dto/common-menu.dto';
import { CommonMenuArgs } from './dto/common-menu.args';

@Controller('menus')
@ApiTags('menus')
export class MenusController {
  constructor(private readonly menusService: MenusService) {}

  // @Post()
  // create(@Body() createMenuDto: CreateMenuDto) {
  //   return this.menusService.create(createMenuDto);
  // }

  @Get()
  @ApiOperation({ operationId: 'menus' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiResponse({ type: PaginatedMenu })
  findAll(@Query() args: PaginatedMenuArgs) {
    return this.menusService.findAll(args);
  }

  @Get(':id')
  @ApiQuery({ name: 'beverageId', required: false, type: Number })
  @ApiQuery({ name: 'foodId', required: false, type: Number })
  @ApiResponse({ type: CommonMenu })
  findOne(@Param('id') id: string, @Query() args: CommonMenuArgs) {
    console.log(`id :: ${id}, beverageId ::${args.beverageId}`);
    return this.menusService.findOne(+id, args);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
  //   return this.menusService.update(+id, updateMenuDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.menusService.remove(+id);
  // }
}
