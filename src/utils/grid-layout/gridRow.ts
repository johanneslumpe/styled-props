import { GridRowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridRowProps<T> {
  /**
   * The **`grid-row`** CSS property is a shorthand property for `grid-row-start` and `grid-row-end` specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row
   */
  gridRow: T;
}

export const gridRow = <
  T = GridRowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridRowProps<T>, Theme>> = {}) =>
  style<IGridRowProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRow',
    prop: 'gridRow',
    themeProp,
  });
