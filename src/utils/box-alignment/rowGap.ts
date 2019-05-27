import { RowGapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface RowGapProps<T> {
  /**
   * The **`row-gap`** CSS property sets the size of the gap (gutter) between an element's grid rows.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/row-gap
   */
  style$RowGap: T;
}

export const rowGap = <
  T = RowGapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<RowGapProps<T>, Theme>> = {}) =>
  style<RowGapProps<T>, Theme, Breakpoints>({
    cssProp: 'rowGap',
    prop: 'style$RowGap',
    themeProp,
  });
