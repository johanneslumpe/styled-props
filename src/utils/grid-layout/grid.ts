import { GridProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridProps<T> {
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  style$Grid: T;
}

export const grid = <
  T = GridProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridProps<T>, Theme>> = {}) =>
  style<GridProps<T>, Theme, Breakpoints>({
    cssProp: 'grid',
    prop: 'style$Grid',
    themeProp,
  });
