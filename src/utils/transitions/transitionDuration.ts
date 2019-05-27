import { TransitionDurationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransitionDurationProps<T> {
  /**
   * The **`transition-duration`** CSS property sets the length of time a transition animation should take to complete. By default, the value is `0s`, meaning that no animation will occur.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-duration
   */
  style$TransitionDuration: T;
}

export const transitionDuration = <
  T = TransitionDurationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransitionDurationProps<T>, Theme>> = {}) =>
  style<TransitionDurationProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDuration',
    prop: 'style$TransitionDuration',
    themeProp,
  });
