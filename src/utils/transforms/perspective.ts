import { PerspectiveProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPerspectiveProps<T> {
  perspective: T;
}

export const perspective = <
  T = PerspectiveProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPerspectiveProps<T>, Theme>> = {}) =>
  style<IPerspectiveProps<T>, Theme, Breakpoints>({
    cssProp: 'perspective',
    prop: 'perspective',
    themeProp,
  });
