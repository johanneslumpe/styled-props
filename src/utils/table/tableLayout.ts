import { TableLayoutPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TableLayoutProps<T> {
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  style$TableLayout: T;
}

export const tableLayout = <
  T = TableLayoutPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TableLayoutProps<T>, Theme>> = {}) =>
  style<TableLayoutProps<T>, Theme, Breakpoints>({
    cssProp: 'tableLayout',
    prop: 'style$TableLayout',
    themeProp,
  });
