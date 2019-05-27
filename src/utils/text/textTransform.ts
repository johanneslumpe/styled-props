import { TextTransformPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextTransformProps<T> {
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  style$TextTransform: T;
}

export const textTransform = <
  T = TextTransformPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextTransformProps<T>, Theme>> = {}) =>
  style<TextTransformProps<T>, Theme, Breakpoints>({
    cssProp: 'textTransform',
    prop: 'style$TextTransform',
    themeProp,
  });
