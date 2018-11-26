import { GridColumnEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridColumnEndProps<T> {
  gridColumnEnd: T;
}

export const gridColumnEnd = <
  T = GridColumnEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridColumnEndProps<T>, Theme>> = {}) =>
  style<IGridColumnEndProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumnEnd',
    prop: 'gridColumnEnd',
    themeProp,
  });
