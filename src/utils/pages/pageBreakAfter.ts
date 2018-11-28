import { PageBreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPageBreakAfterProps<T> {
  /**
   * The **`page-break-after`** CSS property adjusts page breaks _after_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-after
   */
  pageBreakAfter: T;
}

export const pageBreakAfter = <
  T = PageBreakAfterPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPageBreakAfterProps<T>, Theme>> = {}) =>
  style<IPageBreakAfterProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakAfter',
    prop: 'pageBreakAfter',
    themeProp,
  });
