import { PositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPositionProps<T> {
  position: T;
}

export const position = <
  T = PositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPositionProps<T>, Theme>> = {}) =>
  style<IPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'position',
    prop: 'position',
    themeProp,
  });
