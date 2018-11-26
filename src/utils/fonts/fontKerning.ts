import { FontKerningPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontKerningProps<T> {
  fontKerning: T;
}

export const fontKerning = <
  T = FontKerningPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontKerningProps<T>, Theme>> = {}) =>
  style<IFontKerningProps<T>, Theme, Breakpoints>({
    cssProp: 'fontKerning',
    prop: 'fontKerning',
    themeProp,
  });
