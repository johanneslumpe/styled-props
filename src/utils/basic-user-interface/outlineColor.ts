import { OutlineColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineColorProps<T> {
  /**
   * The **`outline-color`** CSS property sets the color of an element's outline.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/outline-color
   */
  outlineColor: T;
}

export const outlineColor = <
  T = OutlineColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineColorProps<T>, Theme>> = {}) =>
  style<IOutlineColorProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineColor',
    prop: 'outlineColor',
    themeProp,
  });
