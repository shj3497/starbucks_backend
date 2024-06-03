import { CommonResponse } from 'src/common/response.payload';
import { BeverageDto } from './beverage.dto';

export class CommonBeverageDto extends CommonResponse(BeverageDto) {}
