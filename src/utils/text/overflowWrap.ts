import { OverflowWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOverflowWrapProps<T> {
  overflowWrap: T;
}

export const overflowWrap = <
  T = OverflowWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOverflowWrapProps<T>, Theme>> = {}) =>
  style<IOverflowWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'overflowWrap',
    prop: 'overflowWrap',
    themeProp,
  });
