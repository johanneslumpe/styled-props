import { BlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBlockSizeProps<T> {
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
