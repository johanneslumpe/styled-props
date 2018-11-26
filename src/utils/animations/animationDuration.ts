import { AnimationDurationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationDurationProps<T> {
  animationDuration: T;
}

export const animationDuration = <
  T = AnimationDurationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationDurationProps<T>, Theme>> = {}) =>
  style<IAnimationDurationProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDuration',
    prop: 'animationDuration',
    themeProp,
  });
