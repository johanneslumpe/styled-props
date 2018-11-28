import { FontVariantProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantProps<T> {
  /**
   * The **font-variant** CSS property is a shorthand for the longhand properties `font-variant-caps`, `font-variant-numeric`, `font-variant-alternates`, `font-variant-ligatures`, and `font-variant-east-asian`. You can also set the CSS Level 2 (Revision 1) values of `font-variant`, (that is, `normal` or `small-caps`), by using the `font` shorthand.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-variant
   */
  fontVariant: T;
}

export const fontVariant = <
  T = FontVariantProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantProps<T>, Theme>> = {}) =>
  style<IFontVariantProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariant',
    prop: 'fontVariant',
    themeProp,
  });
