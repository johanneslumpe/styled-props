import { TextUnderlinePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextUnderlinePositionProps<T> {
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  style$TextUnderlinePosition: T;
}

export const textUnderlinePosition = <
  T = TextUnderlinePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextUnderlinePositionProps<T>, Theme>> = {}) =>
  style<TextUnderlinePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textUnderlinePosition',
    prop: 'style$TextUnderlinePosition',
    themeProp,
  });
