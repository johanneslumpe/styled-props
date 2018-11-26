import { BorderImageSliceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageSliceProps<T> {
  borderImageSlice: T;
}

export const borderImageSlice = <
  T = BorderImageSliceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageSliceProps<T>, Theme>> = {}) =>
  style<IBorderImageSliceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSlice',
    prop: 'borderImageSlice',
    themeProp,
  });
