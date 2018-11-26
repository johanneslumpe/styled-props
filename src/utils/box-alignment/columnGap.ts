import { ColumnGapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnGapProps<T> {
  columnGap: T;
}

export const columnGap = <
  T = ColumnGapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnGapProps<T>, Theme>> = {}) =>
  style<IColumnGapProps<T>, Theme, Breakpoints>({
    cssProp: 'columnGap',
    prop: 'columnGap',
    themeProp,
  });
