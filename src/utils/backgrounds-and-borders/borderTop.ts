import { BorderTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopProps<T> {
  /**
   * The **`border-top`** shorthand CSS property set an element's top border. It sets the values of `border-top-width`, `border-top-style` and `border-top-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  style$BorderTop: T;
}

export const borderTop = <
  T = BorderTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopProps<T>, Theme>> = {}) =>
  style<BorderTopProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTop',
    prop: 'style$BorderTop',
    themeProp,
  });
