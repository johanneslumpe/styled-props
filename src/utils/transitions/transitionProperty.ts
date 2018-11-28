import { TransitionPropertyProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionPropertyProps<T> {
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  transitionProperty: T;
}

export const transitionProperty = <
  T = TransitionPropertyProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionPropertyProps<T>, Theme>> = {}) =>
  style<ITransitionPropertyProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionProperty',
    prop: 'transitionProperty',
    themeProp,
  });
