import { FontWeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontWeightProps<T> {
  /**
   * The **`font-weight`** CSS property specifies the weight (or boldness) of the font. The font weights available to you will depend on the `font-family` you are using. Some fonts are only available in `normal` and `bold`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-weight
   */
  fontWeight: T;
}

export const fontWeight = <
  T = FontWeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontWeightProps<T>, Theme>> = {}) =>
  style<IFontWeightProps<T>, Theme, Breakpoints>({
    cssProp: 'fontWeight',
    prop: 'fontWeight',
    themeProp,
  });
