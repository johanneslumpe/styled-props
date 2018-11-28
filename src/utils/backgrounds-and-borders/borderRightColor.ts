import { BorderRightColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightColorProps<T> {
  /**
   * The **`border-right-color`** CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties `border-color` or `border-right`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-color
   */
  borderRightColor: T;
}

export const borderRightColor = <
  T = BorderRightColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightColorProps<T>, Theme>> = {}) =>
  style<IBorderRightColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightColor',
    prop: 'borderRightColor',
    themeProp,
  });
