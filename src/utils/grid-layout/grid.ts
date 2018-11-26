import { GridProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridProps<T> {
  grid: T;
}

export const grid = <
  T = GridProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridProps<T>, Theme>> = {}) =>
  style<IGridProps<T>, Theme, Breakpoints>({
    cssProp: 'grid',
    prop: 'grid',
    themeProp,
  });
