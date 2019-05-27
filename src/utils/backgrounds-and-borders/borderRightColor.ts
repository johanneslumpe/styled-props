import { BorderRightColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderRightColorProps<T> {
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  style$BorderRightColor: T;
}

export const borderRightColor = <
  T = BorderRightColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderRightColorProps<T>, Theme>> = {}) =>
  style<BorderRightColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightColor',
    prop: 'style$BorderRightColor',
    themeProp,
  });
