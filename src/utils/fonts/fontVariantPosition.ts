import { FontVariantPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantPositionProps<T> {
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  fontVariantPosition: T;
}

export const fontVariantPosition = <
  T = FontVariantPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantPositionProps<T>, Theme>> = {}) =>
  style<IFontVariantPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantPosition',
    prop: 'fontVariantPosition',
    themeProp,
  });
