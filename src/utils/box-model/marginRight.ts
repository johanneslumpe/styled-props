import { MarginRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginRightProps<T> {
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  style$MarginRight: T;
}

export const marginRight = <
  T = MarginRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginRightProps<T>, Theme>> = {}) =>
  style<MarginRightProps<T>, Theme, Breakpoints>({
    cssProp: 'marginRight',
    prop: 'style$MarginRight',
    themeProp,
  });
