import { TransitionTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransitionTimingFunctionProps<T> {
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  style$TransitionTimingFunction: T;
}

export const transitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransitionTimingFunctionProps<T>, Theme>> = {}) =>
  style<TransitionTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionTimingFunction',
    prop: 'style$TransitionTimingFunction',
    themeProp,
  });
