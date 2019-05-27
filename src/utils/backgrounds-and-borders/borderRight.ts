import { BorderRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderRightProps<T> {
  /**
   * The **`border-right`** shorthand CSS property sets an element's right border. It sets the values of `border-right-width`, `border-right-style` and `border-right-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  style$BorderRight: T;
}

export const borderRight = <
  T = BorderRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderRightProps<T>, Theme>> = {}) =>
  style<BorderRightProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRight',
    prop: 'style$BorderRight',
    themeProp,
  });
