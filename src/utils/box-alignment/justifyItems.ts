import { JustifyItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface JustifyItemsProps<T> {
  /**
   * The CSS **`justify-items`** property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-items
   */
  style$JustifyItems: T;
}

export const justifyItems = <
  T = JustifyItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<JustifyItemsProps<T>, Theme>> = {}) =>
  style<JustifyItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'justifyItems',
    prop: 'style$JustifyItems',
    themeProp,
  });
