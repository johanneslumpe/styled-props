import { TextEmphasisStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextEmphasisStyleProps<T> {
  /**
   * The **`text-emphasis-style`** CSS property sets the appearance of emphasis marks. It can also be set, and reset, using the `text-emphasis` shorthand.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  style$TextEmphasisStyle: T;
}

export const textEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextEmphasisStyleProps<T>, Theme>> = {}) =>
  style<TextEmphasisStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisStyle',
    prop: 'style$TextEmphasisStyle',
    themeProp,
  });
