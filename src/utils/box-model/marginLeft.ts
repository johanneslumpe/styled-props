import { MarginLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginLeftProps<T> {
  marginLeft: T;
}

export const marginLeft = <
  T = MarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginLeftProps<T>, Theme>> = {}) =>
  style<IMarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'marginLeft',
    prop: 'marginLeft',
    themeProp,
  });
