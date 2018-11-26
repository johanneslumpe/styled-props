import { BorderRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRadiusProps<T> {
  borderRadius: T;
}

export const borderRadius = <
  T = BorderRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRadiusProps<T>, Theme>> = {}) =>
  style<IBorderRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRadius',
    prop: 'borderRadius',
    themeProp,
  });
