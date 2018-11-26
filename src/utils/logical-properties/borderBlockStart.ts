import { BorderBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartProps<T> {
  borderBlockStart: T;
}

export const borderBlockStart = <
  T = BorderBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStart',
    prop: 'borderBlockStart',
    themeProp,
  });
