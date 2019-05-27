import { TextIndentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextIndentProps<T> {
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  style$TextIndent: T;
}

export const textIndent = <
  T = TextIndentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextIndentProps<T>, Theme>> = {}) =>
  style<TextIndentProps<T>, Theme, Breakpoints>({
    cssProp: 'textIndent',
    prop: 'style$TextIndent',
    themeProp,
  });
