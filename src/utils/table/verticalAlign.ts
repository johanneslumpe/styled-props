import { VerticalAlignProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface VerticalAlignProps<T> {
  /**
   * The **`vertical-align`** CSS property sets vertical alignment of an inline or table-cell box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/vertical-align
   */
  style$VerticalAlign: T;
}

export const verticalAlign = <
  T = VerticalAlignProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<VerticalAlignProps<T>, Theme>> = {}) =>
  style<VerticalAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'verticalAlign',
    prop: 'style$VerticalAlign',
    themeProp,
  });
