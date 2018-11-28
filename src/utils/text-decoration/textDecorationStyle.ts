import { TextDecorationStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationStyleProps<T> {
  /**
   * The **`text-decoration-style`** CSS property sets the style of the lines specified by `text-decoration-line`. The style applies to all lines that are set with `text-decoration-line`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration-style
   */
  textDecorationStyle: T;
}

export const textDecorationStyle = <
  T = TextDecorationStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationStyleProps<T>, Theme>> = {}) =>
  style<ITextDecorationStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationStyle',
    prop: 'textDecorationStyle',
    themeProp,
  });
