import { HyphensPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface HyphensProps<T> {
  /**
   * The **`hyphens`** CSS property specifies how words should be hyphenated when text wraps across multiple lines. You can prevent hyphenation entirely, use hyphenation in manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/hyphens
   */
  style$Hyphens: T;
}

export const hyphens = <
  T = HyphensPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<HyphensProps<T>, Theme>> = {}) =>
  style<HyphensProps<T>, Theme, Breakpoints>({
    cssProp: 'hyphens',
    prop: 'style$Hyphens',
    themeProp,
  });
