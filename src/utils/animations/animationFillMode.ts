import { AnimationFillModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationFillModeProps<T> {
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  animationFillMode: T;
}

export const animationFillMode = <
  T = AnimationFillModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationFillModeProps<T>, Theme>> = {}) =>
  style<IAnimationFillModeProps<T>, Theme, Breakpoints>({
    cssProp: 'animationFillMode',
    prop: 'animationFillMode',
    themeProp,
  });
