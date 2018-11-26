import { RotateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRotateProps<T> {
  rotate: T;
}

export const rotate = <
  T = RotateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRotateProps<T>, Theme>> = {}) =>
  style<IRotateProps<T>, Theme, Breakpoints>({
    cssProp: 'rotate',
    prop: 'rotate',
    themeProp,
  });
