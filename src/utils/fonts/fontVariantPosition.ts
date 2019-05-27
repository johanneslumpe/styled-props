import { FontVariantPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantPositionProps<T> {
  /**
   * The **`font-variant-position`** CSS property controls the use of alternate, smaller glyphs that are positioned as superscript or subscript.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-position
   */
  style$FontVariantPosition: T;
}

export const fontVariantPosition = <
  T = FontVariantPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantPositionProps<T>, Theme>> = {}) =>
  style<FontVariantPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantPosition',
    prop: 'style$FontVariantPosition',
    themeProp,
  });
