import { OverflowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowProps<T> {
  /**
   * The **`overflow`** CSS property sets what to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflow-x` and `overflow-y`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow
   */
  overflow: T;
}

export const overflow = <
  T = OverflowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowProps<T>, Theme>> = {}) =>
  style<IOverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'overflow',
    prop: 'overflow',
    themeProp,
  });
