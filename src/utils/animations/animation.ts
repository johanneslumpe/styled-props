import { AnimationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAnimationProps<T> {
  animation: T;
}

export const animation = <
  T = AnimationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAnimationProps<T>, Theme>> = {}) =>
  style<IAnimationProps<T>, Theme, Breakpoints>({
    cssProp: 'animation',
    prop: 'animation',
    themeProp,
  });
