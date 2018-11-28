import { ScaleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScaleProps<T> {
  /**
   * The **`scale`** CSS property allows you to specify scale transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scale
   */
  scale: T;
}

export const scale = <
  T = ScaleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScaleProps<T>, Theme>> = {}) =>
  style<IScaleProps<T>, Theme, Breakpoints>({
    cssProp: 'scale',
    prop: 'scale',
    themeProp,
  });
