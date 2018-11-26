import { FontVariantProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantProps<T> {
  fontVariant: T;
}

export const fontVariant = <
  T = FontVariantProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantProps<T>, Theme>> = {}) =>
  style<IFontVariantProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariant',
    prop: 'fontVariant',
    themeProp,
  });
