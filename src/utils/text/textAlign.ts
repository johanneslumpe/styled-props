import { TextAlignPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TextAlignProps<T> {
  /**
   * The **`text-align`** CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  style$TextAlign: T;
}

export const textAlign = <
  T = TextAlignPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TextAlignProps<T>, Theme>> = {}) =>
  style<TextAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlign',
    prop: 'style$TextAlign',
    themeProp,
  });
