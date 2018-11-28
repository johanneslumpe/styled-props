import { BorderLeftColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftColorProps<T> {
  /**
   * The **`border-left-color`** CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties `border-color` or `border-left`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-color
   */
  borderLeftColor: T;
}

export const borderLeftColor = <
  T = BorderLeftColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftColorProps<T>, Theme>> = {}) =>
  style<IBorderLeftColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftColor',
    prop: 'borderLeftColor',
    themeProp,
  });
