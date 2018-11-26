import { PaddingBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingBottomProps<T> {
  paddingBottom: T;
}

export const paddingBottom = <
  T = PaddingBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingBottomProps<T>, Theme>> = {}) =>
  style<IPaddingBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBottom',
    prop: 'paddingBottom',
    themeProp,
  });
