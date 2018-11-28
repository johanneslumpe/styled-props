import { GridAreaProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAreaProps<T> {
  /**
   * The **`grid-area`** CSS property is a shorthand property for `grid-row-start`, `grid-column-start`, `grid-row-end` and `grid-column-end`, specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-area
   */
  gridArea: T;
}

export const gridArea = <
  T = GridAreaProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAreaProps<T>, Theme>> = {}) =>
  style<IGridAreaProps<T>, Theme, Breakpoints>({
    cssProp: 'gridArea',
    prop: 'gridArea',
    themeProp,
  });
