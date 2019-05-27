import { AnimationFillModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AnimationFillModeProps<T> {
  /**
   * The **`animation-fill-mode`** CSS property sets how a CSS animation applies styles to its target before and after its execution.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/animation-fill-mode
   */
  style$AnimationFillMode: T;
}

export const animationFillMode = <
  T = AnimationFillModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AnimationFillModeProps<T>, Theme>> = {}) =>
  style<AnimationFillModeProps<T>, Theme, Breakpoints>({
    cssProp: 'animationFillMode',
    prop: 'style$AnimationFillMode',
    themeProp,
  });
