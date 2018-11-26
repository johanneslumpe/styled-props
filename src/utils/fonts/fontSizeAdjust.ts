import { FontSizeAdjustProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSizeAdjustProps<T> {
  fontSizeAdjust: T;
}

export const fontSizeAdjust = <
  T = FontSizeAdjustProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSizeAdjustProps<T>, Theme>> = {}) =>
  style<IFontSizeAdjustProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSizeAdjust',
    prop: 'fontSizeAdjust',
    themeProp,
  });
