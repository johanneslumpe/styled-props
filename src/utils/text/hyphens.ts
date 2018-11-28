import { HyphensPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHyphensProps<T> {
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  hyphens: T;
}

export const hyphens = <
  T = HyphensPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHyphensProps<T>, Theme>> = {}) =>
  style<IHyphensProps<T>, Theme, Breakpoints>({
    cssProp: 'hyphens',
    prop: 'hyphens',
    themeProp,
  });
