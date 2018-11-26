import { TextDecorationLinePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationLineProps<T> {
  textDecorationLine: T;
}

export const textDecorationLine = <
  T = TextDecorationLinePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationLineProps<T>, Theme>> = {}) =>
  style<ITextDecorationLineProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecorationLine',
    prop: 'textDecorationLine',
    themeProp,
  });
