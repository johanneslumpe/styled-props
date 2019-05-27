import { AnimationPlayStateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationPlayStateProps<T> {
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  style$AnimationPlayState: T;
}

export const animationPlayState = <
  T = AnimationPlayStateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationPlayStateProps<T>, Theme>> = {}) =>
  style<AnimationPlayStateProps<T>, Theme, Breakpoints>({
    cssProp: 'animationPlayState',
    prop: 'style$AnimationPlayState',
    themeProp,
  });
