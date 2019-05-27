import { AnimationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationProps<T> {
  /**
   * The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  style$Animation: T;
}

export const animation = <
  T = AnimationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationProps<T>, Theme>> = {}) =>
  style<AnimationProps<T>, Theme, Breakpoints>({
    cssProp: 'animation',
    prop: 'style$Animation',
    themeProp,
  });
