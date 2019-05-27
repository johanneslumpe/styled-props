import { FontVariantCapsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantCapsProps<T> {
  /**
   * The **`font-variant-caps`** CSS property controls the use of alternate glyphs for capital letters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-caps
   */
  style$FontVariantCaps: T;
}

export const fontVariantCaps = <
  T = FontVariantCapsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantCapsProps<T>, Theme>> = {}) =>
  style<FontVariantCapsProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantCaps',
    prop: 'style$FontVariantCaps',
    themeProp,
  });
