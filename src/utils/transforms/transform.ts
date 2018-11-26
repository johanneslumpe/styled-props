import { TransformProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITransformProps<T> {
  transform: T;
}

export const transform = <
  T = TransformProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITransformProps<T>, Theme>> = {}) =>
  style<ITransformProps<T>, Theme, Breakpoints>({
    cssProp: 'transform',
    prop: 'transform',
    themeProp,
  });
