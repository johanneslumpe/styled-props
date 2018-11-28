import { TextTransformPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextTransformProps<T> {
  /**
   * The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-transform
   */
  textTransform: T;
}

export const textTransform = <
  T = TextTransformPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextTransformProps<T>, Theme>> = {}) =>
  style<ITextTransformProps<T>, Theme, Breakpoints>({
    cssProp: 'textTransform',
    prop: 'textTransform',
    themeProp,
  });
