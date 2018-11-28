import { TextEmphasisStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisStyleProps<T> {
  /**
   * The **`text-emphasis-style`** CSS property defines the type of emphasis used. It can also be set, and reset, using the `text-emphasis` shorthand.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-style
   */
  textEmphasisStyle: T;
}

export const textEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisStyleProps<T>, Theme>> = {}) =>
  style<ITextEmphasisStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisStyle',
    prop: 'textEmphasisStyle',
    themeProp,
  });
