import { BorderBlockStartColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartColorProps<T> {
  borderBlockStartColor: T;
}

export const borderBlockStartColor = <
  T = BorderBlockStartColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartColorProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartColor',
    prop: 'borderBlockStartColor',
    themeProp,
  });
