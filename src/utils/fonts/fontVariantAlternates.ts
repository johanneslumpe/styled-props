import { FontVariantAlternatesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantAlternatesProps<T> {
  fontVariantAlternates: T;
}

export const fontVariantAlternates = <
  T = FontVariantAlternatesProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantAlternatesProps<T>, Theme>> = {}) =>
  style<IFontVariantAlternatesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantAlternates',
    prop: 'fontVariantAlternates',
    themeProp,
  });
