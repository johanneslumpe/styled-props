import { AnimationIterationCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationIterationCountProps<T> {
  animationIterationCount: T;
}

export const animationIterationCount = <
  T = AnimationIterationCountProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationIterationCountProps<T>, Theme>> = {}) =>
  style<IAnimationIterationCountProps<T>, Theme, Breakpoints>({
    cssProp: 'animationIterationCount',
    prop: 'animationIterationCount',
    themeProp,
  });
