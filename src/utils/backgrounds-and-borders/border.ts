import { BorderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderProps<T> {
  /**
   * The **`border`** CSS property sets an element's border. It's a shorthand for `border-width`, `border-style`, and `border-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border
   */
  border: T;
}

export const border = <
  T = BorderProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderProps<T>, Theme>> = {}) =>
  style<IBorderProps<T>, Theme, Breakpoints>({
    cssProp: 'border',
    prop: 'border',
    themeProp,
  });
