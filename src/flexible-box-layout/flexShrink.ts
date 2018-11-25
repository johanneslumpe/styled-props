import { FlexShrinkProperty } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IFlexShrinkProps<T> {
  flexShrink: T;
}

export const flexShrink = <
  T = FlexShrinkProperty,
  Theme = never,
  Breakpoints = never
>() =>
  style<IFlexShrinkProps<T>, Theme, Breakpoints>({
    cssProp: 'flexShrink',
    prop: 'flexShrink',
  });
