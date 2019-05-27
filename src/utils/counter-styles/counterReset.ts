import { CounterResetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface CounterResetProps<T> {
  /**
   * The **`counter-reset`** CSS property resets a CSS counter to a given value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-reset
   */
  style$CounterReset: T;
}

export const counterReset = <
  T = CounterResetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<CounterResetProps<T>, Theme>> = {}) =>
  style<CounterResetProps<T>, Theme, Breakpoints>({
    cssProp: 'counterReset',
    prop: 'style$CounterReset',
    themeProp,
  });
