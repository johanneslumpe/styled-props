import { OutlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OutlineProps<T> {
  /**
   * The **`outline`** CSS property is a shorthand to set various outline properties in a single declaration: `outline-style`, `outline-width`, and `outline-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline
   */
  style$Outline: T;
}

export const outline = <
  T = OutlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OutlineProps<T>, Theme>> = {}) =>
  style<OutlineProps<T>, Theme, Breakpoints>({
    cssProp: 'outline',
    prop: 'style$Outline',
    themeProp,
  });
