import { MarginBlockEndProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginBlockEndProps<T> {
  /**
   * The **`margin-block-end`** CSS property defines the logical block end margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-end
   */
  style$MarginBlockEnd: T;
}

export const marginBlockEnd = <
  T = MarginBlockEndProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginBlockEndProps<T>, Theme>> = {}) =>
  style<MarginBlockEndProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlockEnd',
    prop: 'style$MarginBlockEnd',
    themeProp,
  });
