import { AnimationNameProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationNameProps<T> {
  /**
   * The **`animation-name`** CSS property sets one or more animations to apply to an element. Each name is an `@keyframes` at-rule that sets the property values for the animation sequence.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-name
   */
  animationName: T;
}

export const animationName = <
  T = AnimationNameProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationNameProps<T>, Theme>> = {}) =>
  style<IAnimationNameProps<T>, Theme, Breakpoints>({
    cssProp: 'animationName',
    prop: 'animationName',
    themeProp,
  });
