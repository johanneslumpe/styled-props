import { WordSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IWordSpacingProps<T> {
  wordSpacing: T;
}

export const wordSpacing = <
  T = WordSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IWordSpacingProps<T>, Theme>> = {}) =>
  style<IWordSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'wordSpacing',
    prop: 'wordSpacing',
    themeProp,
  });
