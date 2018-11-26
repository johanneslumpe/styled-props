import { GridAreaProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAreaProps<T> {
  gridArea: T;
}

export const gridArea = <
  T = GridAreaProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAreaProps<T>, Theme>> = {}) =>
  style<IGridAreaProps<T>, Theme, Breakpoints>({
    cssProp: 'gridArea',
    prop: 'gridArea',
    themeProp,
  });
