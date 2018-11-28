import { BorderTopColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopColorProps<T> {
  /**
   * The **`border-top-color`** CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties `border-color` or `border-top`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-color
   */
  borderTopColor: T;
}

export const borderTopColor = <
  T = BorderTopColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopColorProps<T>, Theme>> = {}) =>
  style<IBorderTopColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopColor',
    prop: 'borderTopColor',
    themeProp,
  });
