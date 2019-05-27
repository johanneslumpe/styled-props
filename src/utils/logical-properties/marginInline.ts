import { MarginInlineProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginInlineProps<T> {
  /**
   * The **`margin-inline`** CSS property defines the logical inline start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-inline
   */
  style$MarginInline: T;
}

export const marginInline = <
  T = MarginInlineProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginInlineProps<T>, Theme>> = {}) =>
  style<MarginInlineProps<T>, Theme, Breakpoints>({
    cssProp: 'marginInline',
    prop: 'style$MarginInline',
    themeProp,
  });
