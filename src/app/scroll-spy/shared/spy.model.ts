import { QueryList } from '@angular/core';
import { ScrollSpyItemDirective } from '../scroll-spy-item/scroll-spy-item.directive';

export interface Spy {
  id: string;
  items: QueryList<ScrollSpyItemDirective>;
}

export interface SpyActiveChange {
  id: string;
  isActive: boolean;
}
