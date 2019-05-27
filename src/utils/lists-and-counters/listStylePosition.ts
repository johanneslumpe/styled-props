import { ListStylePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ListStylePositionProps<T> {
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  style$ListStylePosition: T;
}

export const listStylePosition = <
  T = ListStylePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ListStylePositionProps<T>, Theme>> = {}) =>
  style<ListStylePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'listStylePosition',
    prop: 'style$ListStylePosition',
    themeProp,
  });
