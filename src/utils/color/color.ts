import { ColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IColorProps<T> {
  /**
   * The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `currentcolor` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/color
   */
  color: T;
}

export const color = <
  T = ColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IColorProps<T>, Theme>> = {}) =>
  style<IColorProps<T>, Theme, Breakpoints>({
    cssProp: 'color',
    prop: 'color',
    themeProp,
  });
