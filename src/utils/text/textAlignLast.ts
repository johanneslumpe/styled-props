import { TextAlignLastPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextAlignLastProps<T> {
  /**
   * The **`text-align-last`** CSS property describes how the last line of a block or a line, right before a forced line break, is aligned.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align-last
   */
  textAlignLast: T;
}

export const textAlignLast = <
  T = TextAlignLastPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextAlignLastProps<T>, Theme>> = {}) =>
  style<ITextAlignLastProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlignLast',
    prop: 'textAlignLast',
    themeProp,
  });
