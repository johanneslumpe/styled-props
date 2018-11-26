import { MinHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinHeightProps<T> {
  minHeight: T;
}

export const minHeight = <
  T = MinHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinHeightProps<T>, Theme>> = {}) =>
  style<IMinHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'minHeight',
    prop: 'minHeight',
    themeProp,
  });
