import { EmptyCellsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IEmptyCellsProps<T> {
  emptyCells: T;
}

export const emptyCells = <
  T = EmptyCellsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IEmptyCellsProps<T>, Theme>> = {}) =>
  style<IEmptyCellsProps<T>, Theme, Breakpoints>({
    cssProp: 'emptyCells',
    prop: 'emptyCells',
    themeProp,
  });
