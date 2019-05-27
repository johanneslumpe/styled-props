import { GridRowStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridRowStartProps<T> {
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  style$GridRowStart: T;
}

export const gridRowStart = <
  T = GridRowStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridRowStartProps<T>, Theme>> = {}) =>
  style<GridRowStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRowStart',
    prop: 'style$GridRowStart',
    themeProp,
  });
