import { BoxShadowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BoxShadowProps<T> {
  /**
   * The **`box-shadow`** CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/box-shadow
   */
  style$BoxShadow: T;
}

export const boxShadow = <
  T = BoxShadowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BoxShadowProps<T>, Theme>> = {}) =>
  style<BoxShadowProps<T>, Theme, Breakpoints>({
    cssProp: 'boxShadow',
    prop: 'style$BoxShadow',
    themeProp,
  });
