import { GridRowStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridRowStartProps<T> {
  /**
   * The **`grid-row-start`** CSS property specifies a grid item’s start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-row-start
   */
  gridRowStart: T;
}

export const gridRowStart = <
  T = GridRowStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridRowStartProps<T>, Theme>> = {}) =>
  style<IGridRowStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRowStart',
    prop: 'gridRowStart',
    themeProp,
  });
