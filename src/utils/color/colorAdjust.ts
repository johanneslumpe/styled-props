import { ColorAdjustPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColorAdjustProps<T> {
  colorAdjust: T;
}

export const colorAdjust = <
  T = ColorAdjustPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColorAdjustProps<T>, Theme>> = {}) =>
  style<IColorAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'colorAdjust',
    prop: 'colorAdjust',
    themeProp,
  });
