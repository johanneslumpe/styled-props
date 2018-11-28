import { AnimationPlayStateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationPlayStateProps<T> {
  /**
   * The **`animation-play-state`** CSS property sets whether an animation is running or paused.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-play-state
   */
  animationPlayState: T;
}

export const animationPlayState = <
  T = AnimationPlayStateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationPlayStateProps<T>, Theme>> = {}) =>
  style<IAnimationPlayStateProps<T>, Theme, Breakpoints>({
    cssProp: 'animationPlayState',
    prop: 'animationPlayState',
    themeProp,
  });
