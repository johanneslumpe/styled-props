import { FontVariantPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontVariantPositionProps<T> {
  fontVariantPosition: T;
}

export const fontVariantPosition = <
  T = FontVariantPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontVariantPositionProps<T>, Theme>> = {}) =>
  style<IFontVariantPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'fontVariantPosition',
    prop: 'fontVariantPosition',
    themeProp,
  });
