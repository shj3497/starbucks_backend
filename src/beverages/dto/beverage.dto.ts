import { ApiProperty, PickType } from '@nestjs/swagger';
import { BeverageEntity } from '../entities/beverage.entity';
import { OptionEntity } from 'src/options/entities/option.entity';
import { MenuEntity } from 'src/menus/entities/menu.entity';

class OptionType extends PickType(OptionEntity, ['id', 'name']) {}
class MenuType extends PickType(MenuEntity, ['id', 'name']) {}

export class BeverageDto extends BeverageEntity {
  @ApiProperty({ type: MenuType })
  menu: MenuType;

  @ApiProperty({ type: [OptionType] })
  options: OptionType[];
}
