import { FontLanguageOverrideProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontLanguageOverrideProps<T> {
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  style$FontLanguageOverride: T;
}

export const fontLanguageOverride = <
  T = FontLanguageOverrideProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontLanguageOverrideProps<T>, Theme>> = {}) =>
  style<FontLanguageOverrideProps<T>, Theme, Breakpoints>({
    cssProp: 'fontLanguageOverride',
    prop: 'style$FontLanguageOverride',
    themeProp,
  });
