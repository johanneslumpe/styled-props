import { OrderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOrderProps<T> {
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
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
