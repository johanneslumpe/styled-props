import { AnimationDirectionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationDirectionProps<T> {
  animationDirection: T;
}

export const animationDirection = <
  T = AnimationDirectionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationDirectionProps<T>, Theme>> = {}) =>
  style<IAnimationDirectionProps<T>, Theme, Breakpoints>({
    cssProp: 'animationDirection',
    prop: 'animationDirection',
    themeProp,
  });
