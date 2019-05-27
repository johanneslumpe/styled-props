import { GridColumnStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridColumnStartProps<T> {
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  style$GridColumnStart: T;
}

export const gridColumnStart = <
  T = GridColumnStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridColumnStartProps<T>, Theme>> = {}) =>
  style<GridColumnStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumnStart',
    prop: 'style$GridColumnStart',
    themeProp,
  });
