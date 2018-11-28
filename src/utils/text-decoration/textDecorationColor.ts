import { TextDecorationColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationColorProps<T> {
  /**
   * The **`text-decoration-color`** CSS property sets the color of the decorative additions to text that are specified by `text-decoration-line`; these include underlines and overlines, strikethroughs, and wavy lines like those typically used to indicate content is misspelled (for example). The specified color applies to all such decorative lines in the scope of the property's value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-color
   */
  textDecorationColor: T;
}

export const textDecorationColor = <
  T = TextDecorationColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationColorProps<T>, Theme>> = {}) =>
  style<ITextDecorationColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationColor',
    prop: 'textDecorationColor',
    themeProp,
  });
