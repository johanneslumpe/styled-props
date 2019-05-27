import { AnimationNameProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationNameProps<T> {
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  style$AnimationName: T;
}

export const animationName = <
  T = AnimationNameProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationNameProps<T>, Theme>> = {}) =>
  style<AnimationNameProps<T>, Theme, Breakpoints>({
    cssProp: 'animationName',
    prop: 'style$AnimationName',
    themeProp,
  });
