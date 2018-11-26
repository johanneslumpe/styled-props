import { DirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IDirectionProps<T> {
  direction: T;
}

export const direction = <
  T = DirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IDirectionProps<T>, Theme>> = {}) =>
  style<IDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'direction',
    prop: 'direction',
    themeProp,
  });
