import { OverflowYPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OverflowYProps<T> {
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  style$OverflowY: T;
}

export const overflowY = <
  T = OverflowYPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OverflowYProps<T>, Theme>> = {}) =>
  style<OverflowYProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowY',
    prop: 'style$OverflowY',
    themeProp,
  });
