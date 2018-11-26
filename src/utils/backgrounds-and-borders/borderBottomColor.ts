import { BorderBottomColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomColorProps<T> {
  borderBottomColor: T;
}

export const borderBottomColor = <
  T = BorderBottomColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomColorProps<T>, Theme>> = {}) =>
  style<IBorderBottomColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomColor',
    prop: 'borderBottomColor',
    themeProp,
  });
