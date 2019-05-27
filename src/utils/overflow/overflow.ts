import { OverflowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OverflowProps<T> {
  /**
   * The **`overflow`** shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  style$Overflow: T;
}

export const overflow = <
  T = OverflowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OverflowProps<T>, Theme>> = {}) =>
  style<OverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'overflow',
    prop: 'style$Overflow',
    themeProp,
  });
