import { FontFamilyProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontFamilyProps<T> {
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  style$FontFamily: T;
}

export const fontFamily = <
  T = FontFamilyProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontFamilyProps<T>, Theme>> = {}) =>
  style<FontFamilyProps<T>, Theme, Breakpoints>({
    cssProp: 'fontFamily',
    prop: 'style$FontFamily',
    themeProp,
  });
