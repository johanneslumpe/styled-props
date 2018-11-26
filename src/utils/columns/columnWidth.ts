import { ColumnWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnWidthProps<T> {
  columnWidth: T;
}

export const columnWidth = <
  T = ColumnWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnWidthProps<T>, Theme>> = {}) =>
  style<IColumnWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'columnWidth',
    prop: 'columnWidth',
    themeProp,
  });
