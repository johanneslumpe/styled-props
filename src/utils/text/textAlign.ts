import { TextAlignPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITextAlignProps<T> {
  /**
   * The **`text-align`** CSS property specifies the horizontal alignment of an inline or table-cell box.This means it works like `vertical-align` but in the horizontal direction.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/text-align
   */
  textAlign: T;
}

export const textAlign = <
  T = TextAlignPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITextAlignProps<T>, Theme>> = {}) =>
  style<ITextAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'textAlign',
    prop: 'textAlign',
    themeProp,
  });
