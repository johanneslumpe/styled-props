import { ColumnGapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnGapProps<T> {
  /**
   * The **`column-gap`** CSS property sets the size of the gap (gutter) between an element's columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-gap
   */
  style$ColumnGap: T;
}

export const columnGap = <
  T = ColumnGapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnGapProps<T>, Theme>> = {}) =>
  style<ColumnGapProps<T>, Theme, Breakpoints>({
    cssProp: 'columnGap',
    prop: 'style$ColumnGap',
    themeProp,
  });
