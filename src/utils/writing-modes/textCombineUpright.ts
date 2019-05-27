import { TextCombineUprightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextCombineUprightProps<T> {
  /**
   * The **`text-combine-upright`** CSS property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  style$TextCombineUpright: T;
}

export const textCombineUpright = <
  T = TextCombineUprightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextCombineUprightProps<T>, Theme>> = {}) =>
  style<TextCombineUprightProps<T>, Theme, Breakpoints>({
    cssProp: 'textCombineUpright',
    prop: 'style$TextCombineUpright',
    themeProp,
  });
