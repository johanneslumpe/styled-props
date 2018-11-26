import { CounterIncrementProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICounterIncrementProps<T> {
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
