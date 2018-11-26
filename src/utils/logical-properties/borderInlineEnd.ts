import { BorderInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndProps<T> {
  borderInlineEnd: T;
}

export const borderInlineEnd = <
  T = BorderInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEnd',
    prop: 'borderInlineEnd',
    themeProp,
  });
