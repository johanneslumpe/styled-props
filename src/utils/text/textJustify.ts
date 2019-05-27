import { TextJustifyPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextJustifyProps<T> {
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  style$TextJustify: T;
}

export const textJustify = <
  T = TextJustifyPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextJustifyProps<T>, Theme>> = {}) =>
  style<TextJustifyProps<T>, Theme, Breakpoints>({
    cssProp: 'textJustify',
    prop: 'style$TextJustify',
    themeProp,
  });
