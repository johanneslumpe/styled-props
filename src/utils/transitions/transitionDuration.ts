import { TransitionDurationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionDurationProps<T> {
  transitionDuration: T;
}

export const transitionDuration = <
  T = TransitionDurationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionDurationProps<T>, Theme>> = {}) =>
  style<ITransitionDurationProps<T>, Theme, Breakpoints>({
    cssProp: 'transitionDuration',
    prop: 'transitionDuration',
    themeProp,
  });
