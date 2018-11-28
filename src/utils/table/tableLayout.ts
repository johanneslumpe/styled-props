import { TableLayoutPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITableLayoutProps<T> {
  /**
   * The **`table-layout`** CSS property sets the algorithm used to lay out `<table>` cells, rows, and columns.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/table-layout
   */
  tableLayout: T;
}

export const tableLayout = <
  T = TableLayoutPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITableLayoutProps<T>, Theme>> = {}) =>
  style<ITableLayoutProps<T>, Theme, Breakpoints>({
    cssProp: 'tableLayout',
    prop: 'tableLayout',
    themeProp,
  });
