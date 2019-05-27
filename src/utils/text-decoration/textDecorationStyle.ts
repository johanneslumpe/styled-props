import { TextDecorationStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextDecorationStyleProps<T> {
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  style$TextDecorationStyle: T;
}

export const textDecorationStyle = <
  T = TextDecorationStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextDecorationStyleProps<T>, Theme>> = {}) =>
  style<TextDecorationStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationStyle',
    prop: 'style$TextDecorationStyle',
    themeProp,
  });
