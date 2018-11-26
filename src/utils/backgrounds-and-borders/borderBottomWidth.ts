import { BorderBottomWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomWidthProps<T> {
  borderBottomWidth: T;
}

export const borderBottomWidth = <
  T = BorderBottomWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomWidthProps<T>, Theme>> = {}) =>
  style<IBorderBottomWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomWidth',
    prop: 'borderBottomWidth',
    themeProp,
  });
