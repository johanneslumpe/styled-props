import { PaddingBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPaddingBlockEndProps<T> {
  paddingBlockEnd: T;
}

export const paddingBlockEnd = <
  T = PaddingBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPaddingBlockEndProps<T>, Theme>> = {}) =>
  style<IPaddingBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'paddingBlockEnd',
    prop: 'paddingBlockEnd',
    themeProp,
  });
