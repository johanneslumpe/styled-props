import { AnimationNameProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationNameProps<T> {
  animationName: T;
}

export const animationName = <
  T = AnimationNameProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationNameProps<T>, Theme>> = {}) =>
  style<IAnimationNameProps<T>, Theme, Breakpoints>({
    cssProp: 'animationName',
    prop: 'animationName',
    themeProp,
  });
