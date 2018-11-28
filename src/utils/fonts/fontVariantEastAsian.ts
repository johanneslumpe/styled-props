import { FontVariantEastAsianPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantEastAsianProps<T> {
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
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
