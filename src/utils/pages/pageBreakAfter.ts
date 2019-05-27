import { PageBreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PageBreakAfterProps<T> {
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  style$PageBreakAfter: T;
}

export const pageBreakAfter = <
  T = PageBreakAfterPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PageBreakAfterProps<T>, Theme>> = {}) =>
  style<PageBreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakAfter',
    prop: 'style$PageBreakAfter',
    themeProp,
  });
