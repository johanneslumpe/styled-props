import { BorderBottomRightRadiusProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomRightRadiusProps<T> {
  borderBottomRightRadius: T;
}

export const borderBottomRightRadius = <
  T = BorderBottomRightRadiusProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomRightRadiusProps<T>, Theme>> = {}) =>
  style<IBorderBottomRightRadiusProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomRightRadius',
    prop: 'borderBottomRightRadius',
    themeProp,
  });
