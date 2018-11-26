import { FontSynthesisPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFontSynthesisProps<T> {
  fontSynthesis: T;
}

export const fontSynthesis = <
  T = FontSynthesisPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFontSynthesisProps<T>, Theme>> = {}) =>
  style<IFontSynthesisProps<T>, Theme, Breakpoints>({
    cssProp: 'fontSynthesis',
    prop: 'fontSynthesis',
    themeProp,
  });
