import { TextIndentProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextIndentProps<T> {
  textIndent: T;
}

export const textIndent = <
  T = TextIndentProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextIndentProps<T>, Theme>> = {}) =>
  style<ITextIndentProps<T>, Theme, Breakpoints>({
    cssProp: 'textIndent',
    prop: 'textIndent',
    themeProp,
  });
