import { GridProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridProps<T> {
  /**
   * The **`grid`** CSS property is a shorthand property that sets all of the explicit grid properties (`grid-template-rows`, `grid-template-columns`, and `grid-template-areas`), and all the implicit grid properties (`grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`), in a single declaration.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid
   */
  grid: T;
}

export const grid = <
  T = GridProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridProps<T>, Theme>> = {}) =>
  style<IGridProps<T>, Theme, Breakpoints>({
    cssProp: 'grid',
    prop: 'grid',
    themeProp,
  });
