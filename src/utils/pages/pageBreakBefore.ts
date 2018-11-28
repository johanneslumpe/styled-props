import { PageBreakBeforePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPageBreakBeforeProps<T> {
  /**
   * The **`page-break-before`** CSS property adjusts page breaks _before_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-before
   */
  pageBreakBefore: T;
}

export const pageBreakBefore = <
  T = PageBreakBeforePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPageBreakBeforeProps<T>, Theme>> = {}) =>
  style<IPageBreakBeforeProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakBefore',
    prop: 'pageBreakBefore',
    themeProp,
  });
