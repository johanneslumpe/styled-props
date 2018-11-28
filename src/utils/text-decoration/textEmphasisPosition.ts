import { TextEmphasisPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisPositionProps<T> {
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  textEmphasisPosition: T;
}

export const textEmphasisPosition = <
  T = TextEmphasisPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisPositionProps<T>, Theme>> = {}) =>
  style<ITextEmphasisPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisPosition',
    prop: 'textEmphasisPosition',
    themeProp,
  });
