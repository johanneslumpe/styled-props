import { BorderBlockEndWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndWidthProps<T> {
  borderBlockEndWidth: T;
}

export const borderBlockEndWidth = <
  T = BorderBlockEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndWidthProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndWidth',
    prop: 'borderBlockEndWidth',
    themeProp,
  });
