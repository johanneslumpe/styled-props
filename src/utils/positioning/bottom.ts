import { BottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBottomProps<T> {
  bottom: T;
}

export const bottom = <
  T = BottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBottomProps<T>, Theme>> = {}) =>
  style<IBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'bottom',
    prop: 'bottom',
    themeProp,
  });
