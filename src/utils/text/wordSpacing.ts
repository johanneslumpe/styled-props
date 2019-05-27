import { WordSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WordSpacingProps<T> {
  /**
   * The **`word-spacing`** CSS property sets the length of space between words and between tags.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/word-spacing
   */
  style$WordSpacing: T;
}

export const wordSpacing = <
  T = WordSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WordSpacingProps<T>, Theme>> = {}) =>
  style<WordSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'wordSpacing',
    prop: 'style$WordSpacing',
    themeProp,
  });
