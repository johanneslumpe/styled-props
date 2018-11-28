import { AnimationDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationDelayProps<T> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  animationDelay: T;
}

export const animationDelay = <
  T = AnimationDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationDelayProps<T>, Theme>> = {}) =>
  style<IAnimationDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDelay',
    prop: 'animationDelay',
    themeProp,
  });
