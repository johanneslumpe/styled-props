import { ScrollBehaviorPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ScrollBehaviorProps<T> {
  /**
   * The **`scroll-behavior`** CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  style$ScrollBehavior: T;
}

export const scrollBehavior = <
  T = ScrollBehaviorPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ScrollBehaviorProps<T>, Theme>> = {}) =>
  style<ScrollBehaviorProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollBehavior',
    prop: 'style$ScrollBehavior',
    themeProp,
  });
