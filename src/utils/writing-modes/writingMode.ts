import { WritingModePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWritingModeProps<T> {
  /**
   * The **`writing-mode`** CSS property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/writing-mode
   */
  writingMode: T;
}

export const writingMode = <
  T = WritingModePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWritingModeProps<T>, Theme>> = {}) =>
  style<IWritingModeProps<T>, Theme, Breakpoints>({
    cssProp: 'writingMode',
    prop: 'writingMode',
    themeProp,
  });
