import { Module } from '@nestjs/common';
import { BeveragesService } from './beverages.service';
import { BeveragesController } from './beverages.controller';
import { BeveragesRepository } from './beverages.repository';

@Module({
  controllers: [BeveragesController],
  providers: [BeveragesService, BeveragesRepository],
})
export class BeveragesModule {}
