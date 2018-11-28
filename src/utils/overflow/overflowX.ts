import { OverflowXPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowXProps<T> {
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  overflowX: T;
}

export const overflowX = <
  T = OverflowXPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowXProps<T>, Theme>> = {}) =>
  style<IOverflowXProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowX',
    prop: 'overflowX',
    themeProp,
  });
