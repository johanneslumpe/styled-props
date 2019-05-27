import { AnimationDurationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationDurationProps<T> {
  /**
   * The **`animation-duration`** CSS property sets the length of time that an animation takes to complete one cycle.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-duration
   */
  style$AnimationDuration: T;
}

export const animationDuration = <
  T = AnimationDurationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationDurationProps<T>, Theme>> = {}) =>
  style<AnimationDurationProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDuration',
    prop: 'style$AnimationDuration',
    themeProp,
  });
