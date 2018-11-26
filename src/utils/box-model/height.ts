import { HeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHeightProps<T> {
  height: T;
}

export const height = <
  T = HeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHeightProps<T>, Theme>> = {}) =>
  style<IHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'height',
    prop: 'height',
    themeProp,
  });
