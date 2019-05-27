import { FontVariantEastAsianPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantEastAsianProps<T> {
  /**
   * The **`font-variant-east-asian`** CSS property controls the use of alternate glyphs for East Asian scripts, like Japanese and Chinese.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-east-asian
   */
  style$FontVariantEastAsian: T;
}

export const fontVariantEastAsian = <
  T = FontVariantEastAsianPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantEastAsianProps<T>, Theme>> = {}) =>
  style<FontVariantEastAsianProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantEastAsian',
    prop: 'style$FontVariantEastAsian',
    themeProp,
  });
