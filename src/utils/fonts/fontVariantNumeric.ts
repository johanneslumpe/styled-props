import { FontVariantNumericPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantNumericProps<T> {
  fontVariantNumeric: T;
}

export const fontVariantNumeric = <
  T = FontVariantNumericPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantNumericProps<T>, Theme>> = {}) =>
  style<IFontVariantNumericProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantNumeric',
    prop: 'fontVariantNumeric',
    themeProp,
  });
