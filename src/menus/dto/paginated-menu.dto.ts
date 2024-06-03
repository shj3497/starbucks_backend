import { Paginated } from 'src/common/paginated.payload';
import { MenuDto } from './menu.dto';
import { OmitType } from '@nestjs/swagger';

export class PaginatedMenu extends Paginated(
  OmitType(MenuDto, ['beverages', 'menuOptions']),
) {}
