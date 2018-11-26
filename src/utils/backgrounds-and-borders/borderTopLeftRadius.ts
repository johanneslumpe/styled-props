import { BorderTopLeftRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopLeftRadiusProps<T> {
  borderTopLeftRadius: T;
}

export const borderTopLeftRadius = <
  T = BorderTopLeftRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopLeftRadiusProps<T>, Theme>> = {}) =>
  style<IBorderTopLeftRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopLeftRadius',
    prop: 'borderTopLeftRadius',
    themeProp,
  });
