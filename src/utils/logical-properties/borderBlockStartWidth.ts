import { BorderBlockStartWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBlockStartWidthProps<T> {
  borderBlockStartWidth: T;
}

export const borderBlockStartWidth = <
  T = BorderBlockStartWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBlockStartWidthProps<T>, Theme>> = {}) =>
  style<IBorderBlockStartWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBlockStartWidth',
    prop: 'borderBlockStartWidth',
    themeProp,
  });
