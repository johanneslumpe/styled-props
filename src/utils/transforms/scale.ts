import { ScaleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScaleProps<T> {
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  style$Scale: T;
}

export const scale = <
  T = ScaleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScaleProps<T>, Theme>> = {}) =>
  style<ScaleProps<T>, Theme, Breakpoints>({
    cssProp: 'scale',
    prop: 'style$Scale',
    themeProp,
  });
