import { FlexProperty } from '@johanneslumpe/css-types';

import { style } from './style';

export interface IFlexProps<T> {
  flex: T;
}

export const flex = <T = FlexProperty, Theme = never, Breakpoints = never>() =>
  style<IFlexProps<T>, Theme, Breakpoints>({
    cssProp: 'flex',
    prop: 'flex',
  });
