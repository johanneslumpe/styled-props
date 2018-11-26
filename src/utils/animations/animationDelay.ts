import { AnimationDelayProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationDelayProps<T> {
  animationDelay: T;
}

export const animationDelay = <
  T = AnimationDelayProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationDelayProps<T>, Theme>> = {}) =>
  style<IAnimationDelayProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDelay',
    prop: 'animationDelay',
    themeProp,
  });
