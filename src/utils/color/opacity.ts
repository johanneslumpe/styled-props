import { OpacityProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOpacityProps<T> {
  opacity: T;
}

export const opacity = <
  T = OpacityProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOpacityProps<T>, Theme>> = {}) =>
  style<IOpacityProps<T>, Theme, Breakpoints>({
    cssProp: 'opacity',
    prop: 'opacity',
    themeProp,
  });
