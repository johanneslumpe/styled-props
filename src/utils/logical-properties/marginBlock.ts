import { MarginBlockProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginBlockProps<T> {
  /**
   * The **`margin-block`** CSS property defines the logical block start and end margins of an element, which maps to physical margins depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block
   */
  style$MarginBlock: T;
}

export const marginBlock = <
  T = MarginBlockProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginBlockProps<T>, Theme>> = {}) =>
  style<MarginBlockProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlock',
    prop: 'style$MarginBlock',
    themeProp,
  });
