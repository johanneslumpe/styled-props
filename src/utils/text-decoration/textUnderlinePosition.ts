import { TextUnderlinePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextUnderlinePositionProps<T> {
  textUnderlinePosition: T;
}

export const textUnderlinePosition = <
  T = TextUnderlinePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextUnderlinePositionProps<T>, Theme>> = {}) =>
  style<ITextUnderlinePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'textUnderlinePosition',
    prop: 'textUnderlinePosition',
    themeProp,
  });
