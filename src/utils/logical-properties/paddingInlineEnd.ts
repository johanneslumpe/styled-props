import { PaddingInlineEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingInlineEndProps<T> {
  paddingInlineEnd: T;
}

export const paddingInlineEnd = <
  T = PaddingInlineEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingInlineEndProps<T>, Theme>> = {}) =>
  style<IPaddingInlineEndProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingInlineEnd',
    prop: 'paddingInlineEnd',
    themeProp,
  });
