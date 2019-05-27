import { PaddingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PaddingProps<T> {
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  style$Padding: T;
}

export const padding = <
  T = PaddingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PaddingProps<T>, Theme>> = {}) =>
  style<PaddingProps<T>, Theme, Breakpoints>({
    cssProp: 'padding',
    prop: 'style$Padding',
    themeProp,
  });
