import { FontFamilyProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontFamilyProps<T> {
  fontFamily: T;
}

export const fontFamily = <
  T = FontFamilyProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontFamilyProps<T>, Theme>> = {}) =>
  style<IFontFamilyProps<T>, Theme, Breakpoints>({
    cssProp: 'fontFamily',
    prop: 'fontFamily',
    themeProp,
  });
