import { TextDecorationColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextDecorationColorProps<T> {
  /**
   * The **`text-decoration-color`** CSS property sets the color of decorations added to text by `text-decoration-line`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  style$TextDecorationColor: T;
}

export const textDecorationColor = <
  T = TextDecorationColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextDecorationColorProps<T>, Theme>> = {}) =>
  style<TextDecorationColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationColor',
    prop: 'style$TextDecorationColor',
    themeProp,
  });
