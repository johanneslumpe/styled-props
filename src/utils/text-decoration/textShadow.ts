import { TextShadowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextShadowProps<T> {
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  style$TextShadow: T;
}

export const textShadow = <
  T = TextShadowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextShadowProps<T>, Theme>> = {}) =>
  style<TextShadowProps<T>, Theme, Breakpoints>({
    cssProp: 'textShadow',
    prop: 'style$TextShadow',
    themeProp,
  });
