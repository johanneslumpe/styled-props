import { BorderBlockEndColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndColorProps<T> {
  borderBlockEndColor: T;
}

export const borderBlockEndColor = <
  T = BorderBlockEndColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndColorProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndColor',
    prop: 'borderBlockEndColor',
    themeProp,
  });
