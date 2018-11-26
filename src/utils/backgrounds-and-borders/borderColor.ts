import { BorderColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderColorProps<T> {
  borderColor: T;
}

export const borderColor = <
  T = BorderColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderColorProps<T>, Theme>> = {}) =>
  style<IBorderColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderColor',
    prop: 'borderColor',
    themeProp,
  });
