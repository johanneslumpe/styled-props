import { TextEmphasisColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextEmphasisColorProps<T> {
  /**
   * The **`text-emphasis-color`** CSS property sets the color of emphasis marks. This value can also be set using the `text-emphasis` shorthand.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-color
   */
  style$TextEmphasisColor: T;
}

export const textEmphasisColor = <
  T = TextEmphasisColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextEmphasisColorProps<T>, Theme>> = {}) =>
  style<TextEmphasisColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisColor',
    prop: 'style$TextEmphasisColor',
    themeProp,
  });
