import { AnimationDirectionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationDirectionProps<T> {
  /**
   * The **`animation-direction`** CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-direction
   */
  style$AnimationDirection: T;
}

export const animationDirection = <
  T = AnimationDirectionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationDirectionProps<T>, Theme>> = {}) =>
  style<AnimationDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDirection',
    prop: 'style$AnimationDirection',
    themeProp,
  });
