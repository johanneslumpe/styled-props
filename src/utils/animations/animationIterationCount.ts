import { AnimationIterationCountProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationIterationCountProps<T> {
  /**
   * The **`animation-iteration-count`** CSS property sets the number of times an animation cycle should be played before stopping.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-iteration-count
   */
  style$AnimationIterationCount: T;
}

export const animationIterationCount = <
  T = AnimationIterationCountProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationIterationCountProps<T>, Theme>> = {}) =>
  style<AnimationIterationCountProps<T>, Theme, Breakpoints>({
    cssProp: 'animationIterationCount',
    prop: 'style$AnimationIterationCount',
    themeProp,
  });
