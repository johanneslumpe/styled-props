import { GridRowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridRowProps<T> {
  gridRow: T;
}

export const gridRow = <
  T = GridRowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridRowProps<T>, Theme>> = {}) =>
  style<IGridRowProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRow',
    prop: 'gridRow',
    themeProp,
  });
