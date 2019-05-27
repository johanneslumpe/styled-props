import { AnimationDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationDelayProps<T> {
  /**
   * The **`animation-delay`** CSS property sets when an animation starts. The animation can start later, immediately from its beginning, or immediately and partway through the animation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-delay
   */
  style$AnimationDelay: T;
}

export const animationDelay = <
  T = AnimationDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationDelayProps<T>, Theme>> = {}) =>
  style<AnimationDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDelay',
    prop: 'style$AnimationDelay',
    themeProp,
  });
