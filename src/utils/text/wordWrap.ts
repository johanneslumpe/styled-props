import { WordWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WordWrapProps<T> {
  /**
   * The `**overflow-wrap**` CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/overflow-wrap
   */
  style$WordWrap: T;
}

export const wordWrap = <
  T = WordWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WordWrapProps<T>, Theme>> = {}) =>
  style<WordWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'wordWrap',
    prop: 'style$WordWrap',
    themeProp,
  });
