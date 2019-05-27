import { FontVariantAlternatesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontVariantAlternatesProps<T> {
  /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   */
  style$FontVariantAlternates: T;
}

export const fontVariantAlternates = <
  T = FontVariantAlternatesProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontVariantAlternatesProps<T>, Theme>> = {}) =>
  style<FontVariantAlternatesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantAlternates',
    prop: 'style$FontVariantAlternates',
    themeProp,
  });
