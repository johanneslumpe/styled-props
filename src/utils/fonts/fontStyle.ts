import { FontStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontStyleProps<T> {
  fontStyle: T;
}

export const fontStyle = <
  T = FontStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontStyleProps<T>, Theme>> = {}) =>
  style<IFontStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'fontStyle',
    prop: 'fontStyle',
    themeProp,
  });
