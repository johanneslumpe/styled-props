import { TextEmphasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisProps<T> {
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  textEmphasis: T;
}

export const textEmphasis = <
  T = TextEmphasisProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisProps<T>, Theme>> = {}) =>
  style<ITextEmphasisProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasis',
    prop: 'textEmphasis',
    themeProp,
  });
