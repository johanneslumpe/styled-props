import { DirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface DirectionProps<T> {
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  style$Direction: T;
}

export const direction = <
  T = DirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<DirectionProps<T>, Theme>> = {}) =>
  style<DirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'direction',
    prop: 'style$Direction',
    themeProp,
  });
