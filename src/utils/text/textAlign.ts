import { TextAlignPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextAlignProps<T> {
  textAlign: T;
}

export const textAlign = <
  T = TextAlignPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextAlignProps<T>, Theme>> = {}) =>
  style<ITextAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlign',
    prop: 'textAlign',
    themeProp,
  });
