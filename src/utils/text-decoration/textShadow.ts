import { TextShadowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextShadowProps<T> {
  /**
   * The **`text-shadow`** CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-shadow
   */
  textShadow: T;
}

export const textShadow = <
  T = TextShadowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextShadowProps<T>, Theme>> = {}) =>
  style<ITextShadowProps<T>, Theme, Breakpoints>({
    cssProp: 'textShadow',
    prop: 'textShadow',
    themeProp,
  });
