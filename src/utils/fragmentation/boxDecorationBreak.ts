import { BoxDecorationBreakPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBoxDecorationBreakProps<T> {
  /**
   * The **`box-decoration-break`** CSS property specifies how an element's fragments should be rendered when broken across multiple lines, columns, or pages.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/box-decoration-break
   */
  boxDecorationBreak: T;
}

export const boxDecorationBreak = <
  T = BoxDecorationBreakPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBoxDecorationBreakProps<T>, Theme>> = {}) =>
  style<IBoxDecorationBreakProps<T>, Theme, Breakpoints>({
    cssProp: 'boxDecorationBreak',
    prop: 'boxDecorationBreak',
    themeProp,
  });
