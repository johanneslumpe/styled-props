import { OrderProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OrderProps<T> {
  /**
   * The **`order`** CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending `order` value and then by their source code order.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/order
   */
  style$Order: T;
}

export const order = <
  T = OrderProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OrderProps<T>, Theme>> = {}) =>
  style<OrderProps<T>, Theme, Breakpoints>({
    cssProp: 'order',
    prop: 'style$Order',
    themeProp,
  });
