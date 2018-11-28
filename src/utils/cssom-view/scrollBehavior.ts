import { ScrollBehaviorPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IScrollBehaviorProps<T> {
  /**
   * The **`scroll-behavior`** CSS property specifies the scrolling behavior for a scrolling box when scrolling is triggered by one of the navigation or CSSOM scrolling APIs.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/scroll-behavior
   */
  scrollBehavior: T;
}

export const scrollBehavior = <
  T = ScrollBehaviorPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IScrollBehaviorProps<T>, Theme>> = {}) =>
  style<IScrollBehaviorProps<T>, Theme, Breakpoints>({
    cssProp: 'scrollBehavior',
    prop: 'scrollBehavior',
    themeProp,
  });
