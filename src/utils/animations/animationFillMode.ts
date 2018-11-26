import { AnimationFillModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationFillModeProps<T> {
  animationFillMode: T;
}

export const animationFillMode = <
  T = AnimationFillModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationFillModeProps<T>, Theme>> = {}) =>
  style<IAnimationFillModeProps<T>, Theme, Breakpoints>({
    cssProp: 'animationFillMode',
    prop: 'animationFillMode',
    themeProp,
  });
