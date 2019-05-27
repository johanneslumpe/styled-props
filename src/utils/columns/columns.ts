import { ColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ColumnsProps<T> {
  /**
   * The **`columns`** CSS property sets the column width and column count of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/columns
   */
  style$Columns: T;
}

export const columns = <
  T = ColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ColumnsProps<T>, Theme>> = {}) =>
  style<ColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'columns',
    prop: 'style$Columns',
    themeProp,
  });
