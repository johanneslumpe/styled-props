import { DirectionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IDirectionProps<T> {
  /**
   * The **`direction`** CSS property sets the direction of text, table columns, and horizontal overflow. Use `rtl` for languages written from right to left (like Hebrew or Arabic), and `ltr` for those written from left to right (like English and most other languages).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/direction
   */
  direction: T;
}

export const direction = <
  T = DirectionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IDirectionProps<T>, Theme>> = {}) =>
  style<IDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'direction',
    prop: 'direction',
    themeProp,
  });
