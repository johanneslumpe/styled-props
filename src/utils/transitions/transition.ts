import { TransitionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransitionProps<T> {
  transition: T;
}

export const transition = <
  T = TransitionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransitionProps<T>, Theme>> = {}) =>
  style<ITransitionProps<T>, Theme, Breakpoints>({
    cssProp: 'transition',
    prop: 'transition',
    themeProp,
  });
