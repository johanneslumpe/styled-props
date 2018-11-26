import { ColumnCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnCountProps<T> {
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
