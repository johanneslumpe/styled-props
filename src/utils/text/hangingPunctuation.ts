import { HangingPunctuationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHangingPunctuationProps<T> {
  /**
   * The **`hanging-punctuation`** CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/hanging-punctuation
   */
  hangingPunctuation: T;
}

export const hangingPunctuation = <
  T = HangingPunctuationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHangingPunctuationProps<T>, Theme>> = {}) =>
  style<IHangingPunctuationProps<T>, Theme, Breakpoints>({
    cssProp: 'hangingPunctuation',
    prop: 'hangingPunctuation',
    themeProp,
  });
