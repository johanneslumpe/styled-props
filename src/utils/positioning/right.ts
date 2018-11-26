import { RightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IRightProps<T> {
  right: T;
}

export const right = <
  T = RightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IRightProps<T>, Theme>> = {}) =>
  style<IRightProps<T>, Theme, Breakpoints>({
    cssProp: 'right',
    prop: 'right',
    themeProp,
  });
