import { ColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColorProps<T> {
  color: T;
}

export const color = <
  T = ColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColorProps<T>, Theme>> = {}) =>
  style<IColorProps<T>, Theme, Breakpoints>({
    cssProp: 'color',
    prop: 'color',
    themeProp,
  });
