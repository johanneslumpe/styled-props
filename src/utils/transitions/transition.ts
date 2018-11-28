import { TransitionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionProps<T> {
  /**
   * The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition
   */
  transition: T;
}

export const transition = <
  T = TransitionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionProps<T>, Theme>> = {}) =>
  style<ITransitionProps<T>, Theme, Breakpoints>({
    cssProp: 'transition',
    prop: 'transition',
    themeProp,
  });
