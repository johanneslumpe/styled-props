import { ScrollMarginBlockStartProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginBlockStartProps<T> {
  /**
   * The `scroll-margin-block-start` property defines the margin of the scroll snap area at the start of the block dimension that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-block-start
   */
  style$ScrollMarginBlockStart: T;
}

export const scrollMarginBlockStart = <
  T = ScrollMarginBlockStartProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginBlockStartProps<T>, Theme>> = {}) =>
  style<ScrollMarginBlockStartProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginBlockStart',
    prop: 'style$ScrollMarginBlockStart',
    themeProp,
  });
