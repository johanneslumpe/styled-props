import { PaddingLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingLeftProps<T> {
  paddingLeft: T;
}

export const paddingLeft = <
  T = PaddingLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingLeftProps<T>, Theme>> = {}) =>
  style<IPaddingLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingLeft',
    prop: 'paddingLeft',
    themeProp,
  });
