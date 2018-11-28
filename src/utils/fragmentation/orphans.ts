import { OrphansProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOrphansProps<T> {
  /**
   * The **`orphans`** CSS property sets the minimum number of lines in a block container that must be shown at the _bottom_ of a page, region, or column.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/orphans
   */
  orphans: T;
}

export const orphans = <
  T = OrphansProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOrphansProps<T>, Theme>> = {}) =>
  style<IOrphansProps<T>, Theme, Breakpoints>({
    cssProp: 'orphans',
    prop: 'orphans',
    themeProp,
  });
