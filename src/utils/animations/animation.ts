import { AnimationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationProps<T> {
  /**
   * The **`animation`** shorthand CSS property sets an animated transition between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation
   */
  animation: T;
}

export const animation = <
  T = AnimationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationProps<T>, Theme>> = {}) =>
  style<IAnimationProps<T>, Theme, Breakpoints>({
    cssProp: 'animation',
    prop: 'animation',
    themeProp,
  });
