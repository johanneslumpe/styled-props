import { AnimationTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationTimingFunctionProps<T> {
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  style$AnimationTimingFunction: T;
}

export const animationTimingFunction = <
  T = AnimationTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationTimingFunctionProps<T>, Theme>> = {}) =>
  style<AnimationTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: 'animationTimingFunction',
    prop: 'style$AnimationTimingFunction',
    themeProp,
  });
