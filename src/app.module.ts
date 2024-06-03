import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { BeveragesModule } from './beverages/beverages.module';
import { BenefitsModule } from './benefits/benefits.module';
import { MembershipsModule } from './memberships/memberships.module';
import { UsersModule } from './users/users.module';

import { NewsModule } from './news/news.module';
import { MenusModule } from './menus/menus.module';
import { OptionsModule } from './options/options.module';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    BeveragesModule,
    BenefitsModule,
    MembershipsModule,
    UsersModule,
    NewsModule,
    MenusModule,
    OptionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
