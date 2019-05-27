import { TextEmphasisPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextEmphasisPositionProps<T> {
  /**
   * The **`text-emphasis-position`** CSS property sets where emphasis marks are drawn. Like ruby text, if there isn't enough room for emphasis marks, the line height is increased.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-emphasis-position
   */
  style$TextEmphasisPosition: T;
}

export const textEmphasisPosition = <
  T = TextEmphasisPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextEmphasisPositionProps<T>, Theme>> = {}) =>
  style<TextEmphasisPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisPosition',
    prop: 'style$TextEmphasisPosition',
    themeProp,
  });
