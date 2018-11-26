import { TransitionDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionDelayProps<T> {
  transitionDelay: T;
}

export const transitionDelay = <
  T = TransitionDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionDelayProps<T>, Theme>> = {}) =>
  style<ITransitionDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDelay',
    prop: 'transitionDelay',
    themeProp,
  });
