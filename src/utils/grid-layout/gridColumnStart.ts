import { GridColumnStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridColumnStartProps<T> {
  gridColumnStart: T;
}

export const gridColumnStart = <
  T = GridColumnStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridColumnStartProps<T>, Theme>> = {}) =>
  style<IGridColumnStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridColumnStart',
    prop: 'gridColumnStart',
    themeProp,
  });
