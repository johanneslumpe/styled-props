import { QuotesProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IQuotesProps<T> {
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
