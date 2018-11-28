import { TransitionDurationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionDurationProps<T> {
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  transitionDuration: T;
}

export const transitionDuration = <
  T = TransitionDurationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionDurationProps<T>, Theme>> = {}) =>
  style<ITransitionDurationProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDuration',
    prop: 'transitionDuration',
    themeProp,
  });
