import { TranslateProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITranslateProps<T> {
  /**
   * The **`translate`** CSS property allows you to specify translation transforms individually and independantly of the `transform` property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the `transform` value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/translate
   */
  translate: T;
}

export const translate = <
  T = TranslateProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITranslateProps<T>, Theme>> = {}) =>
  style<ITranslateProps<T>, Theme, Breakpoints>({
    cssProp: 'translate',
    prop: 'translate',
    themeProp,
  });
