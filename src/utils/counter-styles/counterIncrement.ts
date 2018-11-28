import { CounterIncrementProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICounterIncrementProps<T> {
  /**
   * The **`counter-increment`** CSS property increases or decreases the value of a CSS counter by a given value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/counter-increment
   */
  counterIncrement: T;
}

export const counterIncrement = <
  T = CounterIncrementProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICounterIncrementProps<T>, Theme>> = {}) =>
  style<ICounterIncrementProps<T>, Theme, Breakpoints>({
    cssProp: 'counterIncrement',
    prop: 'counterIncrement',
    themeProp,
  });
