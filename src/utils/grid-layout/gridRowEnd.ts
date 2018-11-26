import { GridRowEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridRowEndProps<T> {
  gridRowEnd: T;
}

export const gridRowEnd = <
  T = GridRowEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridRowEndProps<T>, Theme>> = {}) =>
  style<IGridRowEndProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRowEnd',
    prop: 'gridRowEnd',
    themeProp,
  });
