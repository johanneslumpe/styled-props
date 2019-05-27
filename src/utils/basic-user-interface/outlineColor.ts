import { OutlineColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OutlineColorProps<T> {
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  style$OutlineColor: T;
}

export const outlineColor = <
  T = OutlineColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OutlineColorProps<T>, Theme>> = {}) =>
  style<OutlineColorProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineColor',
    prop: 'style$OutlineColor',
    themeProp,
  });
