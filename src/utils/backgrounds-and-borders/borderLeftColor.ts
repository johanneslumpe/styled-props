import { BorderLeftColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderLeftColorProps<T> {
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  style$BorderLeftColor: T;
}

export const borderLeftColor = <
  T = BorderLeftColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderLeftColorProps<T>, Theme>> = {}) =>
  style<BorderLeftColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftColor',
    prop: 'style$BorderLeftColor',
    themeProp,
  });
