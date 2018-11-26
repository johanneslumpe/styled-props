import { ScaleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScaleProps<T> {
  scale: T;
}

export const scale = <
  T = ScaleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScaleProps<T>, Theme>> = {}) =>
  style<IScaleProps<T>, Theme, Breakpoints>({
    cssProp: 'scale',
    prop: 'scale',
    themeProp,
  });
