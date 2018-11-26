import { TextDecorationProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextDecorationProps<T> {
  textDecoration: T;
}

export const textDecoration = <
  T = TextDecorationProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextDecorationProps<T>, Theme>> = {}) =>
  style<ITextDecorationProps<T>, Theme, Breakpoints>({
    cssProp: 'textDecoration',
    prop: 'textDecoration',
    themeProp,
  });
