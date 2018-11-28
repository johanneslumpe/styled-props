import { BorderBottomColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomColorProps<T> {
  /**
   * The **`border-bottom-color`** CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties `border-color` or `border-bottom`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-color
   */
  borderBottomColor: T;
}

export const borderBottomColor = <
  T = BorderBottomColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomColorProps<T>, Theme>> = {}) =>
  style<IBorderBottomColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomColor',
    prop: 'borderBottomColor',
    themeProp,
  });
