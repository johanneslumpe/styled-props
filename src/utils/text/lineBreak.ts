import { LineBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface LineBreakProps<T> {
  /**
   * The **`line-break`** CSS property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/line-break
   */
  style$LineBreak: T;
}

export const lineBreak = <
  T = LineBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<LineBreakProps<T>, Theme>> = {}) =>
  style<LineBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'lineBreak',
    prop: 'style$LineBreak',
    themeProp,
  });
