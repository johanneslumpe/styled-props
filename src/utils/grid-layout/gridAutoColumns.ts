import { GridAutoColumnsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoColumnsProps<T> {
  gridAutoColumns: T;
}

export const gridAutoColumns = <
  T = GridAutoColumnsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAutoColumnsProps<T>, Theme>> = {}) =>
  style<IGridAutoColumnsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoColumns',
    prop: 'gridAutoColumns',
    themeProp,
  });
