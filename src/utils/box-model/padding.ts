import { PaddingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingProps<T> {
  /**
   * The **`padding`** CSS property sets the padding area on all four sides of an element. It is a shorthand for `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/padding
   */
  padding: T;
}

export const padding = <
  T = PaddingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingProps<T>, Theme>> = {}) =>
  style<IPaddingProps<T>, Theme, Breakpoints>({
    cssProp: 'padding',
    prop: 'padding',
    themeProp,
  });
