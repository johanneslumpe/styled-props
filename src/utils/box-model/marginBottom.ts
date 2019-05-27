import { MarginBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginBottomProps<T> {
  /**
   * The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-bottom
   */
  style$MarginBottom: T;
}

export const marginBottom = <
  T = MarginBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginBottomProps<T>, Theme>> = {}) =>
  style<MarginBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBottom',
    prop: 'style$MarginBottom',
    themeProp,
  });
