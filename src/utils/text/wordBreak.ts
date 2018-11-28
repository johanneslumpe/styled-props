import { WordBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWordBreakProps<T> {
  /**
   * The **`word-break`** CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/word-break
   */
  wordBreak: T;
}

export const wordBreak = <
  T = WordBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWordBreakProps<T>, Theme>> = {}) =>
  style<IWordBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'wordBreak',
    prop: 'wordBreak',
    themeProp,
  });
