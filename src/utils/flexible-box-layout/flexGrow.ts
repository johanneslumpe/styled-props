import { FlexGrowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FlexGrowProps<T> {
  /**
   * The **`flex-grow`** CSS property sets how much of the remaining space in the flex container should be assigned to that item (the flex grow factor). The remaining space is the size of the flex container minus the size of all flex items together. If all sibling items have the same flex grow factor, then all items will receive the same share of remaining space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  style$FlexGrow: T;
}

export const flexGrow = <
  T = FlexGrowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FlexGrowProps<T>, Theme>> = {}) =>
  style<FlexGrowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexGrow',
    prop: 'style$FlexGrow',
    themeProp,
  });
