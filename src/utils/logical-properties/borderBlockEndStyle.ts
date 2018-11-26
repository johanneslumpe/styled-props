import { BorderBlockEndStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndStyleProps<T> {
  borderBlockEndStyle: T;
}

export const borderBlockEndStyle = <
  T = BorderBlockEndStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndStyleProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEndStyle',
    prop: 'borderBlockEndStyle',
    themeProp,
  });
