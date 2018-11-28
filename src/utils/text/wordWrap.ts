import { WordWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWordWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property sets whether the browser should insert line breaks within words to prevent text from overflowing its content box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  wordWrap: T;
}

export const wordWrap = <
  T = WordWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWordWrapProps<T>, Theme>> = {}) =>
  style<IWordWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'wordWrap',
    prop: 'wordWrap',
    themeProp,
  });
