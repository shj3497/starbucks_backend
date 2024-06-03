import { ApiProperty, PickType } from '@nestjs/swagger';
import { Benefit } from '@prisma/client';
import { IsDate, IsNumber, IsString } from 'class-validator';
import { MembershipEntity } from 'src/memberships/entities/membership.entity';

class MembershipBenefit extends PickType(MembershipEntity, ['rank']) {}

export class BenefitEntity implements Benefit {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsString()
  @ApiProperty()
  shortTitle: string;

  @IsString()
  @ApiProperty()
  title: string;

  @IsString()
  @ApiProperty()
  description: string;

  @IsString()
  @ApiProperty()
  imgUrl: string;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: [MembershipBenefit] })
  membership: MembershipBenefit[];
}
