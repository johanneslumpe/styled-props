import { TextDecorationColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationColorProps<T> {
  textDecorationColor: T;
}

export const textDecorationColor = <
  T = TextDecorationColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationColorProps<T>, Theme>> = {}) =>
  style<ITextDecorationColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationColor',
    prop: 'textDecorationColor',
    themeProp,
  });
