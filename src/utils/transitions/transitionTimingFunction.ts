import { TransitionTimingFunctionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionTimingFunctionProps<T> {
  transitionTimingFunction: T;
}

export const transitionTimingFunction = <
  T = TransitionTimingFunctionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionTimingFunctionProps<T>, Theme>> = {}) =>
  style<ITransitionTimingFunctionProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionTimingFunction',
    prop: 'transitionTimingFunction',
    themeProp,
  });
