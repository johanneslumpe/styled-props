import { AnimationPlayStateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationPlayStateProps<T> {
  animationPlayState: T;
}

export const animationPlayState = <
  T = AnimationPlayStateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationPlayStateProps<T>, Theme>> = {}) =>
  style<IAnimationPlayStateProps<T>, Theme, Breakpoints>({
    cssProp: 'animationPlayState',
    prop: 'animationPlayState',
    themeProp,
  });
