import { TopProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITopProps<T> {
  top: T;
}

export const top = <
  T = TopProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITopProps<T>, Theme>> = {}) =>
  style<ITopProps<T>, Theme, Breakpoints>({
    cssProp: 'top',
    prop: 'top',
    themeProp,
  });
