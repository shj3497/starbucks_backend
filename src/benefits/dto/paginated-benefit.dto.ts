import { Paginated } from 'src/common/paginated.payload';
import { BenefitEntity } from '../entities/benefit.entity';

export class PaginatedBenefit extends Paginated(BenefitEntity) {}
