import { FontProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontProps<T> {
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  font: T;
}

export const font = <
  T = FontProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontProps<T>, Theme>> = {}) =>
  style<IFontProps<T>, Theme, Breakpoints>({
    cssProp: 'font',
    prop: 'font',
    themeProp,
  });
