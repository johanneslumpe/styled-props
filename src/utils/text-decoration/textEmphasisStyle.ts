import { TextEmphasisStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisStyleProps<T> {
  textEmphasisStyle: T;
}

export const textEmphasisStyle = <
  T = TextEmphasisStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisStyleProps<T>, Theme>> = {}) =>
  style<ITextEmphasisStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisStyle',
    prop: 'textEmphasisStyle',
    themeProp,
  });
