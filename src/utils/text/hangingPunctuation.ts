import { HangingPunctuationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHangingPunctuationProps<T> {
  hangingPunctuation: T;
}

export const hangingPunctuation = <
  T = HangingPunctuationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHangingPunctuationProps<T>, Theme>> = {}) =>
  style<IHangingPunctuationProps<T>, Theme, Breakpoints>({
    cssProp: 'hangingPunctuation',
    prop: 'hangingPunctuation',
    themeProp,
  });
