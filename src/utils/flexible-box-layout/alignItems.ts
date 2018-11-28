import { AlignItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IAlignItemsProps<T> {
  /**
   * The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. The align-self property sets the alignment of an item within its containing block. In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment of items on the Block Axis within their grid area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems: T;
}

export const alignItems = <
  T = AlignItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IAlignItemsProps<T>, Theme>> = {}) =>
  style<IAlignItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'alignItems',
    prop: 'alignItems',
    themeProp,
  });
