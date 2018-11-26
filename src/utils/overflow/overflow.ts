import { OverflowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowProps<T> {
  overflow: T;
}

export const overflow = <
  T = OverflowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowProps<T>, Theme>> = {}) =>
  style<IOverflowProps<T>, Theme, Breakpoints>({
    cssProp: 'overflow',
    prop: 'overflow',
    themeProp,
  });
