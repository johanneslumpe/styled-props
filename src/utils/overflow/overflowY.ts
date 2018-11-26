import { OverflowYPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowYProps<T> {
  overflowY: T;
}

export const overflowY = <
  T = OverflowYPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowYProps<T>, Theme>> = {}) =>
  style<IOverflowYProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowY',
    prop: 'overflowY',
    themeProp,
  });
