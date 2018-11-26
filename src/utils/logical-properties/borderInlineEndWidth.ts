import { BorderInlineEndWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderInlineEndWidthProps<T> {
  borderInlineEndWidth: T;
}

export const borderInlineEndWidth = <
  T = BorderInlineEndWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderInlineEndWidthProps<T>, Theme>> = {}) =>
  style<IBorderInlineEndWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderInlineEndWidth',
    prop: 'borderInlineEndWidth',
    themeProp,
  });
