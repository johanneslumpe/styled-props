import { MinBlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinBlockSizeProps<T> {
  minBlockSize: T;
}

export const minBlockSize = <
  T = MinBlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinBlockSizeProps<T>, Theme>> = {}) =>
  style<IMinBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'minBlockSize',
    prop: 'minBlockSize',
    themeProp,
  });
