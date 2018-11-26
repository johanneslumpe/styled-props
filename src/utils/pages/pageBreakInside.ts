import { PageBreakInsidePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPageBreakInsideProps<T> {
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
