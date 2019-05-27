import { ColumnCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnCountProps<T> {
  /**
   * The **`column-count`** CSS property breaks an element's content into the specified number of columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/column-count
   */
  style$ColumnCount: T;
}

export const columnCount = <
  T = ColumnCountProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnCountProps<T>, Theme>> = {}) =>
  style<ColumnCountProps<T>, Theme, Breakpoints>({
    cssProp: 'columnCount',
    prop: 'style$ColumnCount',
    themeProp,
  });
