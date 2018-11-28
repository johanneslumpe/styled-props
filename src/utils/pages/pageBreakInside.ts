import { PageBreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPageBreakInsideProps<T> {
  /**
   * The **`page-break-inside`** CSS property adjusts page breaks _inside_ the current element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/page-break-inside
   */
  pageBreakInside: T;
}

export const pageBreakInside = <
  T = PageBreakInsidePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPageBreakInsideProps<T>, Theme>> = {}) =>
  style<IPageBreakInsideProps<T>, Theme, Breakpoints>({
    cssProp: 'pageBreakInside',
    prop: 'pageBreakInside',
    themeProp,
  });
