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
import { BenefitsService } from './benefits.service';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginatedBenefit } from './dto/paginated-benefit.dto';
import { PaginatedBenefitArgs } from './dto/paginated-benefit.args';

@Controller('benefits')
@ApiTags('benefits')
export class BenefitsController {
  constructor(private readonly benefitsService: BenefitsService) {}

  // @Post()
  // create(@Body() createBenefitDto: CreateBenefitDto) {
  //   return this.benefitsService.create(createBenefitDto);
  // }

  @Get()
  @ApiOperation({ operationId: 'benefits' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiResponse({ type: PaginatedBenefit })
  findAll(@Query() args: PaginatedBenefitArgs) {
    return this.benefitsService.findAll(args);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.benefitsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBenefitDto: UpdateBenefitDto) {
  //   return this.benefitsService.update(+id, updateBenefitDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.benefitsService.remove(+id);
  // }
}
