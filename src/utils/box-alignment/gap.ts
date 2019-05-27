import { GapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GapProps<T> {
  /**
   * The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/gap
   */
  style$Gap: T;
}

export const gap = <
  T = GapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GapProps<T>, Theme>> = {}) =>
  style<GapProps<T>, Theme, Breakpoints>({
    cssProp: 'gap',
    prop: 'style$Gap',
    themeProp,
  });
