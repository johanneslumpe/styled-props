import { PaddingBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingBlockStartProps<T> {
  paddingBlockStart: T;
}

export const paddingBlockStart = <
  T = PaddingBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingBlockStartProps<T>, Theme>> = {}) =>
  style<IPaddingBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlockStart',
    prop: 'paddingBlockStart',
    themeProp,
  });
