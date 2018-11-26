import { BorderSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderSpacingProps<T> {
  borderSpacing: T;
}

export const borderSpacing = <
  T = BorderSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderSpacingProps<T>, Theme>> = {}) =>
  style<IBorderSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'borderSpacing',
    prop: 'borderSpacing',
    themeProp,
  });
