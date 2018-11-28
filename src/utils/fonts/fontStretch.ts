import { FontStretchProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontStretchProps<T> {
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  fontStretch: T;
}

export const fontStretch = <
  T = FontStretchProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontStretchProps<T>, Theme>> = {}) =>
  style<IFontStretchProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStretch',
    prop: 'fontStretch',
    themeProp,
  });
