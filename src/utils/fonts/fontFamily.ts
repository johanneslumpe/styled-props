import { FontFamilyProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontFamilyProps<T> {
  /**
   * The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-family
   */
  fontFamily: T;
}

export const fontFamily = <
  T = FontFamilyProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontFamilyProps<T>, Theme>> = {}) =>
  style<IFontFamilyProps<T>, Theme, Breakpoints>({
    cssProp: 'fontFamily',
    prop: 'fontFamily',
    themeProp,
  });
