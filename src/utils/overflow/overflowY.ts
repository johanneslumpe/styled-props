import { OverflowYPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowYProps<T> {
  /**
   * The **`overflow-y`** CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-y
   */
  overflowY: T;
}

export const overflowY = <
  T = OverflowYPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowYProps<T>, Theme>> = {}) =>
  style<IOverflowYProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowY',
    prop: 'overflowY',
    themeProp,
  });
