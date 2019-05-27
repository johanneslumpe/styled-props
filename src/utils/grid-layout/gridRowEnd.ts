import { GridRowEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridRowEndProps<T> {
  /**
   * The **`grid-row-end`** CSS property specifies a grid item’s end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-end
   */
  style$GridRowEnd: T;
}

export const gridRowEnd = <
  T = GridRowEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridRowEndProps<T>, Theme>> = {}) =>
  style<GridRowEndProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRowEnd',
    prop: 'style$GridRowEnd',
    themeProp,
  });
