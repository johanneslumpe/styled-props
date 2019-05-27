import { PageBreakBeforePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PageBreakBeforeProps<T> {
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  style$PageBreakBefore: T;
}

export const pageBreakBefore = <
  T = PageBreakBeforePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PageBreakBeforeProps<T>, Theme>> = {}) =>
  style<PageBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakBefore',
    prop: 'style$PageBreakBefore',
    themeProp,
  });
