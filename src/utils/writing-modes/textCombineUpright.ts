import { TextCombineUprightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextCombineUprightProps<T> {
  /**
   * The **`text-combine-upright`** CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-combine-upright
   */
  textCombineUpright: T;
}

export const textCombineUpright = <
  T = TextCombineUprightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextCombineUprightProps<T>, Theme>> = {}) =>
  style<ITextCombineUprightProps<T>, Theme, Breakpoints>({
    cssProp: 'textCombineUpright',
    prop: 'textCombineUpright',
    themeProp,
  });
