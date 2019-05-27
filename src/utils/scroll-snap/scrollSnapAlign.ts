import { ScrollSnapAlignPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollSnapAlignProps<T> {
  /**
   * The `scroll-snap-align` property specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align
   */
  style$ScrollSnapAlign: T;
}

export const scrollSnapAlign = <
  T = ScrollSnapAlignPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollSnapAlignProps<T>, Theme>> = {}) =>
  style<ScrollSnapAlignProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollSnapAlign',
    prop: 'style$ScrollSnapAlign',
    themeProp,
  });
