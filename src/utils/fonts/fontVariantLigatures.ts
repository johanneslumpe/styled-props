import { FontVariantLigaturesPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantLigaturesProps<T> {
  fontVariantLigatures: T;
}

export const fontVariantLigatures = <
  T = FontVariantLigaturesPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantLigaturesProps<T>, Theme>> = {}) =>
  style<IFontVariantLigaturesProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantLigatures',
    prop: 'fontVariantLigatures',
    themeProp,
  });
