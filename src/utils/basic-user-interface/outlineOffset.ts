import { OutlineOffsetProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineOffsetProps<T> {
  outlineOffset: T;
}

export const outlineOffset = <
  T = OutlineOffsetProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineOffsetProps<T>, Theme>> = {}) =>
  style<IOutlineOffsetProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineOffset',
    prop: 'outlineOffset',
    themeProp,
  });
