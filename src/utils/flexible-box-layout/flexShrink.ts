import { FlexShrinkProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexShrinkProps<T> {
  flexShrink: T;
}

export const flexShrink = <
  T = FlexShrinkProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexShrinkProps<T>, Theme>> = {}) =>
  style<IFlexShrinkProps<T>, Theme, Breakpoints>({
    cssProp: 'flexShrink',
    prop: 'flexShrink',
    themeProp,
  });
