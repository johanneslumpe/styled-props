import { FontStretchProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontStretchProps<T> {
  /**
   * The **`font-stretch`** CSS property selects a normal, condensed, or expanded face from a font.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-stretch
   */
  style$FontStretch: T;
}

export const fontStretch = <
  T = FontStretchProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontStretchProps<T>, Theme>> = {}) =>
  style<FontStretchProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStretch',
    prop: 'style$FontStretch',
    themeProp,
  });
