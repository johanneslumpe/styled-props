import { OverflowXPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowXProps<T> {
  overflowX: T;
}

export const overflowX = <
  T = OverflowXPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowXProps<T>, Theme>> = {}) =>
  style<IOverflowXProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowX',
    prop: 'overflowX',
    themeProp,
  });
