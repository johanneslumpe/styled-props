import { BorderLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderLeftProps<T> {
  /**
   * The **`border-left`** CSS property is a shorthand that sets the values of `border-left-width`, `border-left-style` and `border-left-color`. These properties set an element's left border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  borderLeft: T;
}

export const borderLeft = <
  T = BorderLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderLeftProps<T>, Theme>> = {}) =>
  style<IBorderLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeft',
    prop: 'borderLeft',
    themeProp,
  });
