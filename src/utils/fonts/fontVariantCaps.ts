import { FontVariantCapsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantCapsProps<T> {
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  fontVariantCaps: T;
}

export const fontVariantCaps = <
  T = FontVariantCapsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantCapsProps<T>, Theme>> = {}) =>
  style<IFontVariantCapsProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantCaps',
    prop: 'fontVariantCaps',
    themeProp,
  });
