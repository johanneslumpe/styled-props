import { ClearPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClearProps<T> {
  clear: T;
}

export const clear = <
  T = ClearPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClearProps<T>, Theme>> = {}) =>
  style<IClearProps<T>, Theme, Breakpoints>({
    cssProp: 'clear',
    prop: 'clear',
    themeProp,
  });
