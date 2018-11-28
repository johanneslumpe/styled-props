import { OutlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineProps<T> {
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  outline: T;
}

export const outline = <
  T = OutlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineProps<T>, Theme>> = {}) =>
  style<IOutlineProps<T>, Theme, Breakpoints>({
    cssProp: 'outline',
    prop: 'outline',
    themeProp,
  });
