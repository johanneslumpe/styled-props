import { ListStylePositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStylePositionProps<T> {
  /**
   * The **`list-style-position`** CSS property sets the position of the `::marker` relative to a list item.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-position
   */
  listStylePosition: T;
}

export const listStylePosition = <
  T = ListStylePositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStylePositionProps<T>, Theme>> = {}) =>
  style<IListStylePositionProps<T>, Theme, Breakpoints>({
    cssProp: 'listStylePosition',
    prop: 'listStylePosition',
    themeProp,
  });
