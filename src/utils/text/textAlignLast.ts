import { TextAlignLastPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextAlignLastProps<T> {
  textAlignLast: T;
}

export const textAlignLast = <
  T = TextAlignLastPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextAlignLastProps<T>, Theme>> = {}) =>
  style<ITextAlignLastProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlignLast',
    prop: 'textAlignLast',
    themeProp,
  });
