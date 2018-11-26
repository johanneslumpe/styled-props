import { TextEmphasisColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisColorProps<T> {
  textEmphasisColor: T;
}

export const textEmphasisColor = <
  T = TextEmphasisColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisColorProps<T>, Theme>> = {}) =>
  style<ITextEmphasisColorProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisColor',
    prop: 'textEmphasisColor',
    themeProp,
  });
