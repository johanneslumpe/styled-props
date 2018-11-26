import { WordWrapPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWordWrapProps<T> {
  wordWrap: T;
}

export const wordWrap = <
  T = WordWrapPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWordWrapProps<T>, Theme>> = {}) =>
  style<IWordWrapProps<T>, Theme, Breakpoints>({
    cssProp: 'wordWrap',
    prop: 'wordWrap',
    themeProp,
  });
