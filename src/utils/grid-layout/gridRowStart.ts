import { GridRowStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridRowStartProps<T> {
  gridRowStart: T;
}

export const gridRowStart = <
  T = GridRowStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridRowStartProps<T>, Theme>> = {}) =>
  style<IGridRowStartProps<T>, Theme, Breakpoints>({
    cssProp: 'gridRowStart',
    prop: 'gridRowStart',
    themeProp,
  });
