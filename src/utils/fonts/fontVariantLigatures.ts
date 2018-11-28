import { FontVariantLigaturesPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantLigaturesProps<T> {
  /**
   * The **`font-variant-ligatures`** CSS property controls which ligatures and contextual forms are used in textual content of the elements it applies to. This leads to more harmonized forms in the resulting text.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-ligatures
   */
  fontVariantLigatures: T;
}

export const fontVariantLigatures = <
  T = FontVariantLigaturesPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantLigaturesProps<T>, Theme>> = {}) =>
  style<IFontVariantLigaturesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantLigatures',
    prop: 'fontVariantLigatures',
    themeProp,
  });
