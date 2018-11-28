import { FilterProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IFilterProps<T> {
  /**
   * The **`filter`** CSS property applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/filter
   */
  filter: T;
}

export const filter = <
  T = FilterProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IFilterProps<T>, Theme>> = {}) =>
  style<IFilterProps<T>, Theme, Breakpoints>({
    cssProp: 'filter',
    prop: 'filter',
    themeProp,
  });
