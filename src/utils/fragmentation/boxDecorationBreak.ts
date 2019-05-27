import { BoxDecorationBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BoxDecorationBreakProps<T> {
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  style$BoxDecorationBreak: T;
}

export const boxDecorationBreak = <
  T = BoxDecorationBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BoxDecorationBreakProps<T>, Theme>> = {}) =>
  style<BoxDecorationBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'boxDecorationBreak',
    prop: 'style$BoxDecorationBreak',
    themeProp,
  });
