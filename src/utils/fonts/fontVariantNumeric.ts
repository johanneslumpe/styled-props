import { FontVariantNumericPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantNumericProps<T> {
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  style$FontVariantNumeric: T;
}

export const fontVariantNumeric = <
  T = FontVariantNumericPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantNumericProps<T>, Theme>> = {}) =>
  style<FontVariantNumericProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantNumeric',
    prop: 'style$FontVariantNumeric',
    themeProp,
  });
