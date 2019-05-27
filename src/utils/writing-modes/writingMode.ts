import { WritingModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WritingModeProps<T> {
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  style$WritingMode: T;
}

export const writingMode = <
  T = WritingModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WritingModeProps<T>, Theme>> = {}) =>
  style<WritingModeProps<T>, Theme, Breakpoints>({
    cssProp: 'writingMode',
    prop: 'style$WritingMode',
    themeProp,
  });
