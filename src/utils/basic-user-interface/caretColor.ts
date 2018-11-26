import { CaretColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ICaretColorProps<T> {
  caretColor: T;
}

export const caretColor = <
  T = CaretColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ICaretColorProps<T>, Theme>> = {}) =>
  style<ICaretColorProps<T>, Theme, Breakpoints>({
    cssProp: 'caretColor',
    prop: 'caretColor',
    themeProp,
  });
