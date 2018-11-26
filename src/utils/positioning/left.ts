import { LeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ILeftProps<T> {
  left: T;
}

export const left = <
  T = LeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ILeftProps<T>, Theme>> = {}) =>
  style<ILeftProps<T>, Theme, Breakpoints>({
    cssProp: 'left',
    prop: 'left',
    themeProp,
  });
