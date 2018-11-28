import { FontVariantNumericPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantNumericProps<T> {
  /**
   * The **`font-variant-numeric`** CSS property controls the usage of alternate glyphs for numbers, fractions, and ordinal markers.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-numeric
   */
  fontVariantNumeric: T;
}

export const fontVariantNumeric = <
  T = FontVariantNumericPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantNumericProps<T>, Theme>> = {}) =>
  style<IFontVariantNumericProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantNumeric',
    prop: 'fontVariantNumeric',
    themeProp,
  });
