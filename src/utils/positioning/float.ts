import { FloatPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFloatProps<T> {
  /**
   * The **`float`** CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/float
   */
  float: T;
}

export const float = <
  T = FloatPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFloatProps<T>, Theme>> = {}) =>
  style<IFloatProps<T>, Theme, Breakpoints>({
    cssProp: 'float',
    prop: 'float',
    themeProp,
  });
