import { TextDecorationLinePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextDecorationLineProps<T> {
  /**
   * The **`text-decoration-line`** CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-line
   */
  style$TextDecorationLine: T;
}

export const textDecorationLine = <
  T = TextDecorationLinePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextDecorationLineProps<T>, Theme>> = {}) =>
  style<TextDecorationLineProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationLine',
    prop: 'style$TextDecorationLine',
    themeProp,
  });
