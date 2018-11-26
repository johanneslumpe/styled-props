import { GapProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGapProps<T> {
  gap: T;
}

export const gap = <
  T = GapProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGapProps<T>, Theme>> = {}) =>
  style<IGapProps<T>, Theme, Breakpoints>({
    cssProp: 'gap',
    prop: 'gap',
    themeProp,
  });
