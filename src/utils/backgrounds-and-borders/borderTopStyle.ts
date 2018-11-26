import { BorderTopStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopStyleProps<T> {
  borderTopStyle: T;
}

export const borderTopStyle = <
  T = BorderTopStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopStyleProps<T>, Theme>> = {}) =>
  style<IBorderTopStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopStyle',
    prop: 'borderTopStyle',
    themeProp,
  });
