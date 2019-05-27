import { WordBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WordBreakProps<T> {
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  style$WordBreak: T;
}

export const wordBreak = <
  T = WordBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WordBreakProps<T>, Theme>> = {}) =>
  style<WordBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'wordBreak',
    prop: 'style$WordBreak',
    themeProp,
  });
