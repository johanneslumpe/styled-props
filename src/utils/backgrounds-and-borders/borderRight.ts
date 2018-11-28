import { BorderRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightProps<T> {
  /**
   * The **`border-right`** CSS property is a shorthand that sets the values of `border-right-width`, `border-right-style` and `border-right-color`. These properties set an element's right border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right
   */
  borderRight: T;
}

export const borderRight = <
  T = BorderRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightProps<T>, Theme>> = {}) =>
  style<IBorderRightProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRight',
    prop: 'borderRight',
    themeProp,
  });
