import { FlexGrowProperty } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexGrowProps<T> {
  flexGrow: T;
}

export const flexGrow = <
  T = FlexGrowProperty,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexGrowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexGrow',
    prop: 'flexGrow',
  });
