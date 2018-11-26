import { GridColumnProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridColumnProps<T> {
  gridColumn: T;
}

export const gridColumn = <
  T = GridColumnProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridColumnProps<T>, Theme>> = {}) =>
  style<IGridColumnProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumn',
    prop: 'gridColumn',
    themeProp,
  });
