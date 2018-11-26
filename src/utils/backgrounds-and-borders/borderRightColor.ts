import { BorderRightColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightColorProps<T> {
  borderRightColor: T;
}

export const borderRightColor = <
  T = BorderRightColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightColorProps<T>, Theme>> = {}) =>
  style<IBorderRightColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightColor',
    prop: 'borderRightColor',
    themeProp,
  });
