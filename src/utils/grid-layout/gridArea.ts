import { GridAreaProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridAreaProps<T> {
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  style$GridArea: T;
}

export const gridArea = <
  T = GridAreaProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridAreaProps<T>, Theme>> = {}) =>
  style<GridAreaProps<T>, Theme, Breakpoints>({
    cssProp: 'gridArea',
    prop: 'style$GridArea',
    themeProp,
  });
