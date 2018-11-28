import { GridColumnProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridColumnProps<T> {
  /**
   * The **`grid-column`** CSS property is a shorthand property for `grid-column-start` and `grid-column-end` specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column
   */
  gridColumn: T;
}

export const gridColumn = <
  T = GridColumnProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridColumnProps<T>, Theme>> = {}) =>
  style<IGridColumnProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumn',
    prop: 'gridColumn',
    themeProp,
  });
