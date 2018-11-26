import { ColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColumnsProps<T> {
  columns: T;
}

export const columns = <
  T = ColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColumnsProps<T>, Theme>> = {}) =>
  style<IColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'columns',
    prop: 'columns',
    themeProp,
  });
