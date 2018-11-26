import { ColumnSpanPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnSpanProps<T> {
  columnSpan: T;
}

export const columnSpan = <
  T = ColumnSpanPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnSpanProps<T>, Theme>> = {}) =>
  style<IColumnSpanProps<T>, Theme, Breakpoints>({
    cssProp: 'columnSpan',
    prop: 'columnSpan',
    themeProp,
  });
