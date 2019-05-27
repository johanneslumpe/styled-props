import { BorderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderProps<T> {
  /**
   * The **`border`** shorthand CSS property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  style$Border: T;
}

export const border = <
  T = BorderProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderProps<T>, Theme>> = {}) =>
  style<BorderProps<T>, Theme, Breakpoints>({
    cssProp: 'border',
    prop: 'style$Border',
    themeProp,
  });
