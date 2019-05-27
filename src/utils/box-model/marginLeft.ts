import { MarginLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginLeftProps<T> {
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  style$MarginLeft: T;
}

export const marginLeft = <
  T = MarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginLeftProps<T>, Theme>> = {}) =>
  style<MarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'marginLeft',
    prop: 'style$MarginLeft',
    themeProp,
  });
