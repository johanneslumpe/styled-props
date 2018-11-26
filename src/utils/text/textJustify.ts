import { TextJustifyPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextJustifyProps<T> {
  textJustify: T;
}

export const textJustify = <
  T = TextJustifyPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextJustifyProps<T>, Theme>> = {}) =>
  style<ITextJustifyProps<T>, Theme, Breakpoints>({
    cssProp: 'textJustify',
    prop: 'textJustify',
    themeProp,
  });
