import { LineBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILineBreakProps<T> {
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  lineBreak: T;
}

export const lineBreak = <
  T = LineBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILineBreakProps<T>, Theme>> = {}) =>
  style<ILineBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'lineBreak',
    prop: 'lineBreak',
    themeProp,
  });
