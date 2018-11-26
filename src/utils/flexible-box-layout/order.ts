import { OrderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOrderProps<T> {
  order: T;
}

export const order = <
  T = OrderProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOrderProps<T>, Theme>> = {}) =>
  style<IOrderProps<T>, Theme, Breakpoints>({
    cssProp: 'order',
    prop: 'order',
    themeProp,
  });
