import { TableLayoutPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITableLayoutProps<T> {
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
