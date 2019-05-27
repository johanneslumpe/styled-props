import { TextEmphasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextEmphasisProps<T> {
  /**
   * The **`text-emphasis`** CSS property applies emphasis marks to text (except spaces and control characters). It is a shorthand for `text-emphasis-style` and `text-emphasis-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis
   */
  style$TextEmphasis: T;
}

export const textEmphasis = <
  T = TextEmphasisProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextEmphasisProps<T>, Theme>> = {}) =>
  style<TextEmphasisProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasis',
    prop: 'style$TextEmphasis',
    themeProp,
  });
