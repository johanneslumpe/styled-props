import { BorderTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopProps<T> {
  borderTop: T;
}

export const borderTop = <
  T = BorderTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopProps<T>, Theme>> = {}) =>
  style<IBorderTopProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTop',
    prop: 'borderTop',
    themeProp,
  });
