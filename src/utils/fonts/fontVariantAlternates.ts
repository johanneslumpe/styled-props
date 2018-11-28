import { FontVariantAlternatesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantAlternatesProps<T> {
  /**
   * The **`font-variant-alternates`** CSS property controls the usage of alternate glyphs. These alternate glyphs may be referenced by alternative names defined in `@font-feature-values`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant-alternates
   */
  fontVariantAlternates: T;
}

export const fontVariantAlternates = <
  T = FontVariantAlternatesProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantAlternatesProps<T>, Theme>> = {}) =>
  style<IFontVariantAlternatesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantAlternates',
    prop: 'fontVariantAlternates',
    themeProp,
  });
