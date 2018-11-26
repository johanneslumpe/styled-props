import { FlexGrowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexGrowProps<T> {
  flexGrow: T;
}

export const flexGrow = <
  T = FlexGrowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexGrowProps<T>, Theme>> = {}) =>
  style<IFlexGrowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexGrow',
    prop: 'flexGrow',
    themeProp,
  });
