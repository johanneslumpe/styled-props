import { BorderTopRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopRightRadiusProps<T> {
  borderTopRightRadius: T;
}

export const borderTopRightRadius = <
  T = BorderTopRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopRightRadiusProps<T>, Theme>> = {}) =>
  style<IBorderTopRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopRightRadius',
    prop: 'borderTopRightRadius',
    themeProp,
  });
