import { GridColumnStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridColumnStartProps<T> {
  /**
   * The **`grid-column-start`** CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-column-start
   */
  gridColumnStart: T;
}

export const gridColumnStart = <
  T = GridColumnStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridColumnStartProps<T>, Theme>> = {}) =>
  style<IGridColumnStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumnStart',
    prop: 'gridColumnStart',
    themeProp,
  });
