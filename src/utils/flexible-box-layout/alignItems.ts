import { AlignItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface AlignItemsProps<T> {
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  style$AlignItems: T;
}

export const alignItems = <
  T = AlignItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<AlignItemsProps<T>, Theme>> = {}) =>
  style<AlignItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'alignItems',
    prop: 'style$AlignItems',
    themeProp,
  });
