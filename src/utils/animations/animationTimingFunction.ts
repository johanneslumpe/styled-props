import { AnimationTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationTimingFunctionProps<T> {
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
