import { FontSizeAdjustProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontSizeAdjustProps<T> {
  /**
   * The **`font-size-adjust`** CSS property sets how the font size should be chosen based on the height of lowercase rather than capital letters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size-adjust
   */
  style$FontSizeAdjust: T;
}

export const fontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontSizeAdjustProps<T>, Theme>> = {}) =>
  style<FontSizeAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSizeAdjust',
    prop: 'style$FontSizeAdjust',
    themeProp,
  });
