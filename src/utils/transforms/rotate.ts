import { RotateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface RotateProps<T> {
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  style$Rotate: T;
}

export const rotate = <
  T = RotateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<RotateProps<T>, Theme>> = {}) =>
  style<RotateProps<T>, Theme, Breakpoints>({
    cssProp: 'rotate',
    prop: 'style$Rotate',
    themeProp,
  });
