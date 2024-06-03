import { CommonResponse } from 'src/common/response.payload';
import { MenuDto } from './menu.dto';

export class CommonMenu extends CommonResponse(MenuDto) {}
