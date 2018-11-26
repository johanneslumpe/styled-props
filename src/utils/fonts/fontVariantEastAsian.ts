import { FontVariantEastAsianPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantEastAsianProps<T> {
  fontVariantEastAsian: T;
}

export const fontVariantEastAsian = <
  T = FontVariantEastAsianPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantEastAsianProps<T>, Theme>> = {}) =>
  style<IFontVariantEastAsianProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantEastAsian',
    prop: 'fontVariantEastAsian',
    themeProp,
  });
