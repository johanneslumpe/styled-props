import { TransitionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransitionProps<T> {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  style$Transition: T;
}

export const transition = <
  T = TransitionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransitionProps<T>, Theme>> = {}) =>
  style<TransitionProps<T>, Theme, Breakpoints>({
    cssProp: 'transition',
    prop: 'style$Transition',
    themeProp,
  });
