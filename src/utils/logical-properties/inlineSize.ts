import { InlineSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IInlineSizeProps<T> {
  inlineSize: T;
}

export const inlineSize = <
  T = InlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IInlineSizeProps<T>, Theme>> = {}) =>
  style<IInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'inlineSize',
    prop: 'inlineSize',
    themeProp,
  });
