import { JustifyItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IJustifyItemsProps<T> {
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  justifyItems: T;
}

export const justifyItems = <
  T = JustifyItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IJustifyItemsProps<T>, Theme>> = {}) =>
  style<IJustifyItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyItems',
    prop: 'justifyItems',
    themeProp,
  });
