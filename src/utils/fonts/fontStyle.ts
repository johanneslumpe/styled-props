import { FontStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontStyleProps<T> {
  /**
   * The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-style
   */
  fontStyle: T;
}

export const fontStyle = <
  T = FontStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontStyleProps<T>, Theme>> = {}) =>
  style<IFontStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStyle',
    prop: 'fontStyle',
    themeProp,
  });
