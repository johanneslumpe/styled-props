import { BorderInlineStartWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineStartWidthProps<T> {
  borderInlineStartWidth: T;
}

export const borderInlineStartWidth = <
  T = BorderInlineStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineStartWidthProps<T>, Theme>> = {}) =>
  style<IBorderInlineStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineStartWidth',
    prop: 'borderInlineStartWidth',
    themeProp,
  });
