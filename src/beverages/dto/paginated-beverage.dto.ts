import { Paginated } from 'src/common/paginated.payload';
import { BeverageDto } from './beverage.dto';

export class PaginatedBeverage extends Paginated(BeverageDto) {}
