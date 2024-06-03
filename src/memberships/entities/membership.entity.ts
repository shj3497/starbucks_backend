import { ApiProperty } from '@nestjs/swagger';
import { Membership, Rank } from '@prisma/client';
import { IsDate, IsEnum, IsNumber } from 'class-validator';

export class MembershipEntity implements Membership {
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsEnum(Rank)
  @ApiProperty({ enum: Rank })
  rank: Rank;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}
