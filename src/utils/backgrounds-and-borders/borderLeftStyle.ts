import { BorderLeftStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftStyleProps<T> {
  borderLeftStyle: T;
}

export const borderLeftStyle = <
  T = BorderLeftStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftStyleProps<T>, Theme>> = {}) =>
  style<IBorderLeftStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftStyle',
    prop: 'borderLeftStyle',
    themeProp,
  });
