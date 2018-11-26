import { BorderTopColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopColorProps<T> {
  borderTopColor: T;
}

export const borderTopColor = <
  T = BorderTopColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopColorProps<T>, Theme>> = {}) =>
  style<IBorderTopColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopColor',
    prop: 'borderTopColor',
    themeProp,
  });
