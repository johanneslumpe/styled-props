import { TransitionDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransitionDelayProps<T> {
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  style$TransitionDelay: T;
}

export const transitionDelay = <
  T = TransitionDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransitionDelayProps<T>, Theme>> = {}) =>
  style<TransitionDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDelay',
    prop: 'style$TransitionDelay',
    themeProp,
  });
