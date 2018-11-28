import { TransitionTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionTimingFunctionProps<T> {
  /**
   * The **`transition-timing-function`** CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-timing-function
   */
  transitionTimingFunction: T;
}

export const transitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionTimingFunctionProps<T>, Theme>> = {}) =>
  style<ITransitionTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionTimingFunction',
    prop: 'transitionTimingFunction',
    themeProp,
  });
