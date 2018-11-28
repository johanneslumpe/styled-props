import { ColumnFillPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnFillProps<T> {
  /**
   * The **`column-fill`** CSS property controls how an element's contents are balanced when broken into columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-fill
   */
  columnFill: T;
}

export const columnFill = <
  T = ColumnFillPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnFillProps<T>, Theme>> = {}) =>
  style<IColumnFillProps<T>, Theme, Breakpoints>({
    cssProp: 'columnFill',
    prop: 'columnFill',
    themeProp,
  });
