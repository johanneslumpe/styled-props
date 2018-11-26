import { MinInlineSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinInlineSizeProps<T> {
  minInlineSize: T;
}

export const minInlineSize = <
  T = MinInlineSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinInlineSizeProps<T>, Theme>> = {}) =>
  style<IMinInlineSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'minInlineSize',
    prop: 'minInlineSize',
    themeProp,
  });
