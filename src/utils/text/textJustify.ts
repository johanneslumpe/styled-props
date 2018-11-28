import { TextJustifyPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextJustifyProps<T> {
  /**
   * The **`text-justify`** CSS property sets what type of justification should be applied to text when `text-align``: justify;` is set on an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-justify
   */
  textJustify: T;
}

export const textJustify = <
  T = TextJustifyPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextJustifyProps<T>, Theme>> = {}) =>
  style<ITextJustifyProps<T>, Theme, Breakpoints>({
    cssProp: 'textJustify',
    prop: 'textJustify',
    themeProp,
  });
