import { ColumnFillPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnFillProps<T> {
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  style$ColumnFill: T;
}

export const columnFill = <
  T = ColumnFillPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnFillProps<T>, Theme>> = {}) =>
  style<ColumnFillProps<T>, Theme, Breakpoints>({
    cssProp: 'columnFill',
    prop: 'style$ColumnFill',
    themeProp,
  });
