import { TextTransformPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextTransformProps<T> {
  textTransform: T;
}

export const textTransform = <
  T = TextTransformPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextTransformProps<T>, Theme>> = {}) =>
  style<ITextTransformProps<T>, Theme, Breakpoints>({
    cssProp: 'textTransform',
    prop: 'textTransform',
    themeProp,
  });
