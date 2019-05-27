import { CounterIncrementProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface CounterIncrementProps<T> {
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  style$CounterIncrement: T;
}

export const counterIncrement = <
  T = CounterIncrementProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<CounterIncrementProps<T>, Theme>> = {}) =>
  style<CounterIncrementProps<T>, Theme, Breakpoints>({
    cssProp: 'counterIncrement',
    prop: 'style$CounterIncrement',
    themeProp,
  });
