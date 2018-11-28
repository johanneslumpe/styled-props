import { AnimationIterationCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationIterationCountProps<T> {
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
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
