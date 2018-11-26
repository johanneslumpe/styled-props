import { BorderInlineEndStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndStyleProps<T> {
  borderInlineEndStyle: T;
}

export const borderInlineEndStyle = <
  T = BorderInlineEndStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndStyleProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndStyle',
    prop: 'borderInlineEndStyle',
    themeProp,
  });
