import { QuotesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IQuotesProps<T> {
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  quotes: T;
}

export const quotes = <
  T = QuotesProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IQuotesProps<T>, Theme>> = {}) =>
  style<IQuotesProps<T>, Theme, Breakpoints>({
    cssProp: 'quotes',
    prop: 'quotes',
    themeProp,
  });
