import { LetterSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface LetterSpacingProps<T> {
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  style$LetterSpacing: T;
}

export const letterSpacing = <
  T = LetterSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<LetterSpacingProps<T>, Theme>> = {}) =>
  style<LetterSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'letterSpacing',
    prop: 'style$LetterSpacing',
    themeProp,
  });
