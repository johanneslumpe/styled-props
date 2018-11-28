import { TransitionDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionDelayProps<T> {
  /**
   * The **`transition-delay`** CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-delay
   */
  transitionDelay: T;
}

export const transitionDelay = <
  T = TransitionDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionDelayProps<T>, Theme>> = {}) =>
  style<ITransitionDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDelay',
    prop: 'transitionDelay',
    themeProp,
  });
