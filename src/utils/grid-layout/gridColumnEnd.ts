import { GridColumnEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridColumnEndProps<T> {
  /**
   * The **`grid-column-end`** CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-end
   */
  style$GridColumnEnd: T;
}

export const gridColumnEnd = <
  T = GridColumnEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridColumnEndProps<T>, Theme>> = {}) =>
  style<GridColumnEndProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumnEnd',
    prop: 'style$GridColumnEnd',
    themeProp,
  });
