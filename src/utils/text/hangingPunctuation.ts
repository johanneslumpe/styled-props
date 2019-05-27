import { HangingPunctuationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface HangingPunctuationProps<T> {
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  style$HangingPunctuation: T;
}

export const hangingPunctuation = <
  T = HangingPunctuationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<HangingPunctuationProps<T>, Theme>> = {}) =>
  style<HangingPunctuationProps<T>, Theme, Breakpoints>({
    cssProp: 'hangingPunctuation',
    prop: 'style$HangingPunctuation',
    themeProp,
  });
