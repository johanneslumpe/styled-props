import { BorderTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopProps<T> {
  /**
   * The **`border-top`** CSS property is a shorthand that sets the values of `border-top-width`, `border-top-style` and `border-top-color`. These properties set an element's top border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top
   */
  borderTop: T;
}

export const borderTop = <
  T = BorderTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopProps<T>, Theme>> = {}) =>
  style<IBorderTopProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTop',
    prop: 'borderTop',
    themeProp,
  });
