import { FontKerningPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontKerningProps<T> {
  /**
   * The **`font-kerning`** CSS property sets the use of the kerning information stored in a font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-kerning
   */
  fontKerning: T;
}

export const fontKerning = <
  T = FontKerningPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontKerningProps<T>, Theme>> = {}) =>
  style<IFontKerningProps<T>, Theme, Breakpoints>({
    cssProp: 'fontKerning',
    prop: 'fontKerning',
    themeProp,
  });
