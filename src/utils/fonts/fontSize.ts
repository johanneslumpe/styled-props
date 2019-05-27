import { FontSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FontSizeProps<T> {
  /**
   * The **`font-size`** CSS property sets the size of the font. This property is also used to compute the size of `em`, `ex`, and other relative `<length>` units.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/font-size
   */
  style$FontSize: T;
}

export const fontSize = <
  T = FontSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FontSizeProps<T>, Theme>> = {}) =>
  style<FontSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSize',
    prop: 'style$FontSize',
    themeProp,
  });
