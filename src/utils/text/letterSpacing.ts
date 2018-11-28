import { LetterSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILetterSpacingProps<T> {
  /**
   * The **`letter-spacing`** CSS property sets the spacing behavior between text characters.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/letter-spacing
   */
  letterSpacing: T;
}

export const letterSpacing = <
  T = LetterSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILetterSpacingProps<T>, Theme>> = {}) =>
  style<ILetterSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'letterSpacing',
    prop: 'letterSpacing',
    themeProp,
  });
