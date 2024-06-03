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
import { BeveragesService } from './beverages.service';
import { CreateBeverageDto } from './dto/create-beverage.dto';
import { UpdateBeverageDto } from './dto/update-beverage.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedBeverage } from './dto/paginated-beverage.dto';
import { PaginatedBeverageArgs } from './dto/paginated-beverage.args';
import { BeverageDto } from './dto/beverage.dto';

@Controller('beverages')
@ApiTags('beverages')
export class BeveragesController {
  constructor(private readonly beveragesService: BeveragesService) {}

  // @Post()
  // create(@Body() createBeverageDto: CreateBeverageDto) {
  //   return this.beveragesService.create(createBeverageDto);
  // }

  @Get()
  @ApiOperation({ operationId: 'beverages' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiResponse({ type: PaginatedBeverage })
  findAll(@Query() args: PaginatedBeverageArgs) {
    return this.beveragesService.findAll(args);
  }

  // @Get(':id')
  // @ApiOperation({
  //   operationId: 'beverage',
  // })
  // @ApiResponse({ type: BeverageDto })
  // findOne(@Param('id') id: string) {
  //   return this.beveragesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateBeverageDto: UpdateBeverageDto,
  // ) {
  //   return this.beveragesService.update(+id, updateBeverageDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.beveragesService.remove(+id);
  // }
}
