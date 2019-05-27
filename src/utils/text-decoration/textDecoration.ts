import { TextDecorationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextDecorationProps<T> {
  /**
   * The **`text-decoration`** shorthand CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  style$TextDecoration: T;
}

export const textDecoration = <
  T = TextDecorationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextDecorationProps<T>, Theme>> = {}) =>
  style<TextDecorationProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecoration',
    prop: 'style$TextDecoration',
    themeProp,
  });
