import { BlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBlockSizeProps<T> {
  /**
   * The **`block-size`** CSS property defines the horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `width` or the `height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/block-size
   */
  blockSize: T;
}

export const blockSize = <
  T = BlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBlockSizeProps<T>, Theme>> = {}) =>
  style<IBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'blockSize',
    prop: 'blockSize',
    themeProp,
  });
