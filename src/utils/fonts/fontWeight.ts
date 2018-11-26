import { FontWeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontWeightProps<T> {
  fontWeight: T;
}

export const fontWeight = <
  T = FontWeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontWeightProps<T>, Theme>> = {}) =>
  style<IFontWeightProps<T>, Theme, Breakpoints>({
    cssProp: 'fontWeight',
    prop: 'fontWeight',
    themeProp,
  });
