import { MarginTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginTopProps<T> {
  /**
   * The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-top
   */
  style$MarginTop: T;
}

export const marginTop = <
  T = MarginTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginTopProps<T>, Theme>> = {}) =>
  style<MarginTopProps<T>, Theme, Breakpoints>({
    cssProp: 'marginTop',
    prop: 'style$MarginTop',
    themeProp,
  });
