import { FilterProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface FilterProps<T> {
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  style$Filter: T;
}

export const filter = <
  T = FilterProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<FilterProps<T>, Theme>> = {}) =>
  style<FilterProps<T>, Theme, Breakpoints>({
    cssProp: 'filter',
    prop: 'style$Filter',
    themeProp,
  });
