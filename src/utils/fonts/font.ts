import { FontProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontProps<T> {
  /**
   * The **`font`** CSS property is a shorthand for `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`, `line-height`, and `font-family`. Alternatively, it sets an element's font to a system font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font
   */
  style$Font: T;
}

export const font = <
  T = FontProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontProps<T>, Theme>> = {}) =>
  style<FontProps<T>, Theme, Breakpoints>({
    cssProp: 'font',
    prop: 'style$Font',
    themeProp,
  });
