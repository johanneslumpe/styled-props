import { BreakBeforePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBreakBeforeProps<T> {
  breakBefore: T;
}

export const breakBefore = <
  T = BreakBeforePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBreakBeforeProps<T>, Theme>> = {}) =>
  style<IBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: 'breakBefore',
    prop: 'breakBefore',
    themeProp,
  });
