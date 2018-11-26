import { TextRenderingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextRenderingProps<T> {
  textRendering: T;
}

export const textRendering = <
  T = TextRenderingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextRenderingProps<T>, Theme>> = {}) =>
  style<ITextRenderingProps<T>, Theme, Breakpoints>({
    cssProp: 'textRendering',
    prop: 'textRendering',
    themeProp,
  });
