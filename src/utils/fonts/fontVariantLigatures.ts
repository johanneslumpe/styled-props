import { FontVariantLigaturesPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantLigaturesProps<T> {
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  style$FontVariantLigatures: T;
}

export const fontVariantLigatures = <
  T = FontVariantLigaturesPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantLigaturesProps<T>, Theme>> = {}) =>
  style<FontVariantLigaturesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantLigatures',
    prop: 'style$FontVariantLigatures',
    themeProp,
  });
