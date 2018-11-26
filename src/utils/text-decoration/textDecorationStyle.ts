import { TextDecorationStylePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationStyleProps<T> {
  textDecorationStyle: T;
}

export const textDecorationStyle = <
  T = TextDecorationStylePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationStyleProps<T>, Theme>> = {}) =>
  style<ITextDecorationStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationStyle',
    prop: 'textDecorationStyle',
    themeProp,
  });
