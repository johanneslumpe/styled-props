import { FontProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontProps<T> {
  font: T;
}

export const font = <
  T = FontProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontProps<T>, Theme>> = {}) =>
  style<IFontProps<T>, Theme, Breakpoints>({
    cssProp: 'font',
    prop: 'font',
    themeProp,
  });
