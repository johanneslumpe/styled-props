import { TranslateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TranslateProps<T> {
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independently of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  style$Translate: T;
}

export const translate = <
  T = TranslateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TranslateProps<T>, Theme>> = {}) =>
  style<TranslateProps<T>, Theme, Breakpoints>({
    cssProp: 'translate',
    prop: 'style$Translate',
    themeProp,
  });
