import { BlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BlockSizeProps<T> {
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  style$BlockSize: T;
}

export const blockSize = <
  T = BlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BlockSizeProps<T>, Theme>> = {}) =>
  style<BlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'blockSize',
    prop: 'style$BlockSize',
    themeProp,
  });
