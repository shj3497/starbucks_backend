import { CommonResponse } from 'src/common/response.payload';
import { BenefitEntity } from '../entities/benefit.entity';

export class BenefitDto extends CommonResponse(BenefitEntity) {}
