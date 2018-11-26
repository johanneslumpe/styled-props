import { WillChangeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWillChangeProps<T> {
  willChange: T;
}

export const willChange = <
  T = WillChangeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWillChangeProps<T>, Theme>> = {}) =>
  style<IWillChangeProps<T>, Theme, Breakpoints>({
    cssProp: 'willChange',
    prop: 'willChange',
    themeProp,
  });
