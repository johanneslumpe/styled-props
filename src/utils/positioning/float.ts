import { FloatPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFloatProps<T> {
  float: T;
}

export const float = <
  T = FloatPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFloatProps<T>, Theme>> = {}) =>
  style<IFloatProps<T>, Theme, Breakpoints>({
    cssProp: 'float',
    prop: 'float',
    themeProp,
  });
