import { FlexGrowProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFlexGrowProps<T> {
  /**
   * The **`flex-grow`** CSS property sets how much of the available space in the flex container should be assigned to that item (the flex grow factor). If all sibling items have the same flex grow factor, then all items will receive the same share of available space, otherwise it is distributed according to the ratio defined by the different flex grow factors.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/flex-grow
   */
  flexGrow: T;
}

export const flexGrow = <
  T = FlexGrowProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFlexGrowProps<T>, Theme>> = {}) =>
  style<IFlexGrowProps<T>, Theme, Breakpoints>({
    cssProp: 'flexGrow',
    prop: 'flexGrow',
    themeProp,
  });
