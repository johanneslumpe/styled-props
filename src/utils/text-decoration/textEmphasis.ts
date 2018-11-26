import { TextEmphasisProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisProps<T> {
  textEmphasis: T;
}

export const textEmphasis = <
  T = TextEmphasisProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisProps<T>, Theme>> = {}) =>
  style<ITextEmphasisProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasis',
    prop: 'textEmphasis',
    themeProp,
  });
