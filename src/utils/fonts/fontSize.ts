import { FontSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSizeProps<T> {
  fontSize: T;
}

export const fontSize = <
  T = FontSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSizeProps<T>, Theme>> = {}) =>
  style<IFontSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSize',
    prop: 'fontSize',
    themeProp,
  });
