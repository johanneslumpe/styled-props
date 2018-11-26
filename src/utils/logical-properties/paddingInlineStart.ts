import { PaddingInlineStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingInlineStartProps<T> {
  paddingInlineStart: T;
}

export const paddingInlineStart = <
  T = PaddingInlineStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingInlineStartProps<T>, Theme>> = {}) =>
  style<IPaddingInlineStartProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingInlineStart',
    prop: 'paddingInlineStart',
    themeProp,
  });
