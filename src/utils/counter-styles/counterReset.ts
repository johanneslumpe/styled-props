import { CounterResetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICounterResetProps<T> {
  counterReset: T;
}

export const counterReset = <
  T = CounterResetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICounterResetProps<T>, Theme>> = {}) =>
  style<ICounterResetProps<T>, Theme, Breakpoints>({
    cssProp: 'counterReset',
    prop: 'counterReset',
    themeProp,
  });
