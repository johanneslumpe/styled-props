import { OrderProperty } from '@johanneslumpe/css-types';

import { style } from '../style';

export interface IOrderProps<T> {
  order: T;
}

export const order = <
  T = OrderProperty,
  Theme = never,
  Breakpoints = never
>() =>
  style<IOrderProps<T>, Theme, Breakpoints>({
    cssProp: 'order',
    prop: 'order',
  });
