import { FontStretchProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontStretchProps<T> {
  fontStretch: T;
}

export const fontStretch = <
  T = FontStretchProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontStretchProps<T>, Theme>> = {}) =>
  style<IFontStretchProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStretch',
    prop: 'fontStretch',
    themeProp,
  });
