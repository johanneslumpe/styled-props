import { ZIndexProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IZIndexProps<T> {
  zIndex: T;
}

export const zIndex = <
  T = ZIndexProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IZIndexProps<T>, Theme>> = {}) =>
  style<IZIndexProps<T>, Theme, Breakpoints>({
    cssProp: 'zIndex',
    prop: 'zIndex',
    themeProp,
  });
