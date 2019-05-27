import { FontWeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontWeightProps<T> {
  /**
   * The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` you are using.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  style$FontWeight: T;
}

export const fontWeight = <
  T = FontWeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontWeightProps<T>, Theme>> = {}) =>
  style<FontWeightProps<T>, Theme, Breakpoints>({
    cssProp: 'fontWeight',
    prop: 'style$FontWeight',
    themeProp,
  });
