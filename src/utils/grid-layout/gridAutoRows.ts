import { GridAutoRowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoRowsProps<T> {
  gridAutoRows: T;
}

export const gridAutoRows = <
  T = GridAutoRowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAutoRowsProps<T>, Theme>> = {}) =>
  style<IGridAutoRowsProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoRows',
    prop: 'gridAutoRows',
    themeProp,
  });
