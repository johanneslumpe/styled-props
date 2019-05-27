import { OrphansProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OrphansProps<T> {
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  style$Orphans: T;
}

export const orphans = <
  T = OrphansProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OrphansProps<T>, Theme>> = {}) =>
  style<OrphansProps<T>, Theme, Breakpoints>({
    cssProp: 'orphans',
    prop: 'style$Orphans',
    themeProp,
  });
