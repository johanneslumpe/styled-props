import { MarginBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MarginBlockStartProps<T> {
  /**
   * The **`margin-block-start`** CSS property defines the logical block start margin of an element, which maps to a physical margin depending on the element's writing mode, directionality, and text orientation.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-block-start
   */
  style$MarginBlockStart: T;
}

export const marginBlockStart = <
  T = MarginBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MarginBlockStartProps<T>, Theme>> = {}) =>
  style<MarginBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'marginBlockStart',
    prop: 'style$MarginBlockStart',
    themeProp,
  });
