import { ScrollSnapStopPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollSnapStopProps<T> {
  /**
   * The **`scroll-snap-stop`** CSS property defines whether the scroll container is allowed to "pass over" possible snap positions.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop
   */
  style$ScrollSnapStop: T;
}

export const scrollSnapStop = <
  T = ScrollSnapStopPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollSnapStopProps<T>, Theme>> = {}) =>
  style<ScrollSnapStopProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollSnapStop',
    prop: 'style$ScrollSnapStop',
    themeProp,
  });
