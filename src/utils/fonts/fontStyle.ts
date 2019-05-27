import { FontStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontStyleProps<T> {
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  style$FontStyle: T;
}

export const fontStyle = <
  T = FontStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontStyleProps<T>, Theme>> = {}) =>
  style<FontStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStyle',
    prop: 'style$FontStyle',
    themeProp,
  });
