import { TextEmphasisPositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextEmphasisPositionProps<T> {
  textEmphasisPosition: T;
}

export const textEmphasisPosition = <
  T = TextEmphasisPositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextEmphasisPositionProps<T>, Theme>> = {}) =>
  style<ITextEmphasisPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textEmphasisPosition',
    prop: 'textEmphasisPosition',
    themeProp,
  });
