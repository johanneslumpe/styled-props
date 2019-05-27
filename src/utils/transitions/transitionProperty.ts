import { TransitionPropertyProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TransitionPropertyProps<T> {
  /**
   * The **`transition-property`** CSS property sets the CSS properties to which a transition effect should be applied.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/transition-property
   */
  style$TransitionProperty: T;
}

export const transitionProperty = <
  T = TransitionPropertyProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TransitionPropertyProps<T>, Theme>> = {}) =>
  style<TransitionPropertyProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionProperty',
    prop: 'style$TransitionProperty',
    themeProp,
  });
