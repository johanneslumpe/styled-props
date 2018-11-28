import { TextIndentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextIndentProps<T> {
  /**
   * The **`text-indent`** CSS property sets the length of empty space (indentation) that is put before lines of text in a block.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-indent
   */
  textIndent: T;
}

export const textIndent = <
  T = TextIndentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextIndentProps<T>, Theme>> = {}) =>
  style<ITextIndentProps<T>, Theme, Breakpoints>({
    cssProp: 'textIndent',
    prop: 'textIndent',
    themeProp,
  });
