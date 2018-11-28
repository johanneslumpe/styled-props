import { TextUnderlinePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextUnderlinePositionProps<T> {
  /**
   * The **`text-underline-position`** CSS property specifies the position of the underline which is set using the `text-decoration` property's `underline` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-underline-position
   */
  textUnderlinePosition: T;
}

export const textUnderlinePosition = <
  T = TextUnderlinePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextUnderlinePositionProps<T>, Theme>> = {}) =>
  style<ITextUnderlinePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textUnderlinePosition',
    prop: 'textUnderlinePosition',
    themeProp,
  });
