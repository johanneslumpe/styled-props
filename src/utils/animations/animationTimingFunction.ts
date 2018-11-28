import { AnimationTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationTimingFunctionProps<T> {
  /**
   * The `**animation-timing-function**` CSS property sets how an animation progresses through the duration of each cycle.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-timing-function
   */
  animationTimingFunction: T;
}

export const animationTimingFunction = <
  T = AnimationTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationTimingFunctionProps<T>, Theme>> = {}) =>
  style<IAnimationTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: 'animationTimingFunction',
    prop: 'animationTimingFunction',
    themeProp,
  });
