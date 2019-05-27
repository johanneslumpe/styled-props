import { PageBreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PageBreakInsideProps<T> {
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  style$PageBreakInside: T;
}

export const pageBreakInside = <
  T = PageBreakInsidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PageBreakInsideProps<T>, Theme>> = {}) =>
  style<PageBreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakInside',
    prop: 'style$PageBreakInside',
    themeProp,
  });
