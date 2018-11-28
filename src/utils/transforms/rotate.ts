import { RotateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRotateProps<T> {
  /**
   * The **`rotate`** CSS property allows you to specify rotation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/rotate
   */
  rotate: T;
}

export const rotate = <
  T = RotateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRotateProps<T>, Theme>> = {}) =>
  style<IRotateProps<T>, Theme, Breakpoints>({
    cssProp: 'rotate',
    prop: 'rotate',
    themeProp,
  });
