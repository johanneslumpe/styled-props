import { BorderTopColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopColorProps<T> {
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  style$BorderTopColor: T;
}

export const borderTopColor = <
  T = BorderTopColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopColorProps<T>, Theme>> = {}) =>
  style<BorderTopColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopColor',
    prop: 'style$BorderTopColor',
    themeProp,
  });
