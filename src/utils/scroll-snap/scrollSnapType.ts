import { ScrollSnapTypePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollSnapTypeProps<T> {
  /**
   * The **`scroll-snap-type`** CSS property sets how strictly snap points are enforced on the scroll container in case there is one.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type
   */
  style$ScrollSnapType: T;
}

export const scrollSnapType = <
  T = ScrollSnapTypePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollSnapTypeProps<T>, Theme>> = {}) =>
  style<ScrollSnapTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollSnapType',
    prop: 'style$ScrollSnapType',
    themeProp,
  });
