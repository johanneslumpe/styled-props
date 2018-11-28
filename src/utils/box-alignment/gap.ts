import { GapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGapProps<T> {
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  gap: T;
}

export const gap = <
  T = GapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGapProps<T>, Theme>> = {}) =>
  style<IGapProps<T>, Theme, Breakpoints>({
    cssProp: 'gap',
    prop: 'gap',
    themeProp,
  });
