import { PaddingTopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingTopProps<T> {
  paddingTop: T;
}

export const paddingTop = <
  T = PaddingTopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingTopProps<T>, Theme>> = {}) =>
  style<IPaddingTopProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingTop',
    prop: 'paddingTop',
    themeProp,
  });
