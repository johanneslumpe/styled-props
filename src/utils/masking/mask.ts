import { MaskProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskProps<T> {
  mask: T;
}

export const mask = <
  T = MaskProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskProps<T>, Theme>> = {}) =>
  style<IMaskProps<T>, Theme, Breakpoints>({
    cssProp: 'mask',
    prop: 'mask',
    themeProp,
  });
