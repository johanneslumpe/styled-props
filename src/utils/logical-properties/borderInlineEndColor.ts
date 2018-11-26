import { BorderInlineEndColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndColorProps<T> {
  borderInlineEndColor: T;
}

export const borderInlineEndColor = <
  T = BorderInlineEndColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndColorProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndColor',
    prop: 'borderInlineEndColor',
    themeProp,
  });
