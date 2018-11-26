import { BorderLeftColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftColorProps<T> {
  borderLeftColor: T;
}

export const borderLeftColor = <
  T = BorderLeftColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftColorProps<T>, Theme>> = {}) =>
  style<IBorderLeftColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftColor',
    prop: 'borderLeftColor',
    themeProp,
  });
