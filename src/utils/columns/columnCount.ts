import { ColumnCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnCountProps<T> {
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  columnCount: T;
}

export const columnCount = <
  T = ColumnCountProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnCountProps<T>, Theme>> = {}) =>
  style<IColumnCountProps<T>, Theme, Breakpoints>({
    cssProp: 'columnCount',
    prop: 'columnCount',
    themeProp,
  });
