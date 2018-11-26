import { OutlineWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOutlineWidthProps<T> {
  outlineWidth: T;
}

export const outlineWidth = <
  T = OutlineWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOutlineWidthProps<T>, Theme>> = {}) =>
  style<IOutlineWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'outlineWidth',
    prop: 'outlineWidth',
    themeProp,
  });
