import { FontLanguageOverrideProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontLanguageOverrideProps<T> {
  /**
   * The **`font-language-override`** CSS property controls the use of language-specific glyphs in a typeface.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-language-override
   */
  fontLanguageOverride: T;
}

export const fontLanguageOverride = <
  T = FontLanguageOverrideProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontLanguageOverrideProps<T>, Theme>> = {}) =>
  style<IFontLanguageOverrideProps<T>, Theme, Breakpoints>({
    cssProp: 'fontLanguageOverride',
    prop: 'fontLanguageOverride',
    themeProp,
  });
