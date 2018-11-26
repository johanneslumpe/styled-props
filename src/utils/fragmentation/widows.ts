import { WidowsProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWidowsProps<T> {
  widows: T;
}

export const widows = <
  T = WidowsProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWidowsProps<T>, Theme>> = {}) =>
  style<IWidowsProps<T>, Theme, Breakpoints>({
    cssProp: 'widows',
    prop: 'widows',
    themeProp,
  });
