import { PageBreakAfterPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPageBreakAfterProps<T> {
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
