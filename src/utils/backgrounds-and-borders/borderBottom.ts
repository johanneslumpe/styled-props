import { BorderBottomProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomProps<T> {
  borderBottom: T;
}

export const borderBottom = <
  T = BorderBottomProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomProps<T>, Theme>> = {}) =>
  style<IBorderBottomProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottom',
    prop: 'borderBottom',
    themeProp,
  });
