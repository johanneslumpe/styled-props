import { MaxHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaxHeightProps<T> {
  maxHeight: T;
}

export const maxHeight = <
  T = MaxHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaxHeightProps<T>, Theme>> = {}) =>
  style<IMaxHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'maxHeight',
    prop: 'maxHeight',
    themeProp,
  });
