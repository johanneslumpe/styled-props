import { FontSizeAdjustProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSizeAdjustProps<T> {
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  fontSizeAdjust: T;
}

export const fontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSizeAdjustProps<T>, Theme>> = {}) =>
  style<IFontSizeAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSizeAdjust',
    prop: 'fontSizeAdjust',
    themeProp,
  });
