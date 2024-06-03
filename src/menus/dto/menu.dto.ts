import { BeverageDto } from 'src/beverages/dto/beverage.dto';
import { MenuEntity } from '../entities/menu.entity';
import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';

class Beverage extends OmitType(BeverageDto, ['menu', 'options']) {}
class MenuOption extends PickType(BeverageDto, [
  'id',
  'menuId',
  'name',
  'imgUrl',
  'isIce',
  'isHot',
]) {}

export class MenuDto extends MenuEntity {
  @ApiProperty({ type: [Beverage] })
  beverages: Beverage[];

  @ApiProperty({ type: [MenuOption] })
  menuOptions: MenuOption[];
}
