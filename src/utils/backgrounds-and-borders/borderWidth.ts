import { BorderWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderWidthProps<T> {
  borderWidth: T;
}

export const borderWidth = <
  T = BorderWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderWidthProps<T>, Theme>> = {}) =>
  style<IBorderWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderWidth',
    prop: 'borderWidth',
    themeProp,
  });
