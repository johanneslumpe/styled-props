import { FontSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSizeProps<T> {
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  fontSize: T;
}

export const fontSize = <
  T = FontSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSizeProps<T>, Theme>> = {}) =>
  style<IFontSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSize',
    prop: 'fontSize',
    themeProp,
  });
