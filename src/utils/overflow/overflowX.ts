import { OverflowXPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OverflowXProps<T> {
  /**
   * The **`overflow-x`** CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-x
   */
  style$OverflowX: T;
}

export const overflowX = <
  T = OverflowXPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OverflowXProps<T>, Theme>> = {}) =>
  style<OverflowXProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowX',
    prop: 'style$OverflowX',
    themeProp,
  });
