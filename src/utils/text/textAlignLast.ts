import { TextAlignLastPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextAlignLastProps<T> {
  /**
   * The **`text-align-last`** CSS property sets how the last line of a block or a line, right before a forced line break, is aligned.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  style$TextAlignLast: T;
}

export const textAlignLast = <
  T = TextAlignLastPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextAlignLastProps<T>, Theme>> = {}) =>
  style<TextAlignLastProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlignLast',
    prop: 'style$TextAlignLast',
    themeProp,
  });
