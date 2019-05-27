import { BorderBottomColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomColorProps<T> {
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  style$BorderBottomColor: T;
}

export const borderBottomColor = <
  T = BorderBottomColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomColorProps<T>, Theme>> = {}) =>
  style<BorderBottomColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomColor',
    prop: 'style$BorderBottomColor',
    themeProp,
  });
