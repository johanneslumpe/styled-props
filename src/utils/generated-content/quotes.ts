import { QuotesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface QuotesProps<T> {
  /**
   * The **`quotes`** CSS property sets how quotation marks appear.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/quotes
   */
  style$Quotes: T;
}

export const quotes = <
  T = QuotesProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<QuotesProps<T>, Theme>> = {}) =>
  style<QuotesProps<T>, Theme, Breakpoints>({
    cssProp: 'quotes',
    prop: 'style$Quotes',
    themeProp,
  });
