import { FontVariantCapsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantCapsProps<T> {
  fontVariantCaps: T;
}

export const fontVariantCaps = <
  T = FontVariantCapsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantCapsProps<T>, Theme>> = {}) =>
  style<IFontVariantCapsProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantCaps',
    prop: 'fontVariantCaps',
    themeProp,
  });
