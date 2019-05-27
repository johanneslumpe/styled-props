import { ScrollMarginLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollMarginLeftProps<T> {
  /**
   * The `scroll-margin-left` property defines the left margin of the scroll snap area that is used for snapping this box to the snapport. The scroll snap area is determined by taking the transformed border box, finding its rectangular bounding box (axis-aligned in the scroll container’s coordinate space), then adding the specified outsets.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-margin-left
   */
  style$ScrollMarginLeft: T;
}

export const scrollMarginLeft = <
  T = ScrollMarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollMarginLeftProps<T>, Theme>> = {}) =>
  style<ScrollMarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollMarginLeft',
    prop: 'style$ScrollMarginLeft',
    themeProp,
  });
