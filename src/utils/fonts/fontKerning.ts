import { FontKerningPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontKerningProps<T> {
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  style$FontKerning: T;
}

export const fontKerning = <
  T = FontKerningPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontKerningProps<T>, Theme>> = {}) =>
  style<FontKerningProps<T>, Theme, Breakpoints>({
    cssProp: 'fontKerning',
    prop: 'style$FontKerning',
    themeProp,
  });
