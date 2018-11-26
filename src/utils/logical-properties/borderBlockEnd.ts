import { BorderBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockEndProps<T> {
  borderBlockEnd: T;
}

export const borderBlockEnd = <
  T = BorderBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockEndProps<T>, Theme>> = {}) =>
  style<IBorderBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockEnd',
    prop: 'borderBlockEnd',
    themeProp,
  });
