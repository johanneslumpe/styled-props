import { TextDecorationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationProps<T> {
  /**
   * The **`text-decoration`** CSS property sets the appearance of decorative lines on text. It is a shorthand for `text-decoration-line`, `text-decoration-color`, and `text-decoration-style`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-decoration
   */
  textDecoration: T;
}

export const textDecoration = <
  T = TextDecorationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationProps<T>, Theme>> = {}) =>
  style<ITextDecorationProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecoration',
    prop: 'textDecoration',
    themeProp,
  });
