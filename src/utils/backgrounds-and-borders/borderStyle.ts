import { BorderStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderStyleProps<T> {
  borderStyle: T;
}

export const borderStyle = <
  T = BorderStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderStyleProps<T>, Theme>> = {}) =>
  style<IBorderStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderStyle',
    prop: 'borderStyle',
    themeProp,
  });
