import { BorderInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartProps<T> {
  borderInlineStart: T;
}

export const borderInlineStart = <
  T = BorderInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStart',
    prop: 'borderInlineStart',
    themeProp,
  });
