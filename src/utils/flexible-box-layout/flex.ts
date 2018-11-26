import { FlexProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexProps<T> {
  flex: T;
}

export const flex = <
  T = FlexProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexProps<T>, Theme>> = {}) =>
  style<IFlexProps<T>, Theme, Breakpoints>({
    cssProp: 'flex',
    prop: 'flex',
    themeProp,
  });
