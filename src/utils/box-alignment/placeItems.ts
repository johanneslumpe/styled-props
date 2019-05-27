import { PlaceItemsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PlaceItemsProps<T> {
  /**
   * The CSS **`place-items`** shorthand property sets the `align-items` and `justify-items` properties, respectively. If the second value is not set, the first value is also used for it.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/place-items
   */
  style$PlaceItems: T;
}

export const placeItems = <
  T = PlaceItemsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PlaceItemsProps<T>, Theme>> = {}) =>
  style<PlaceItemsProps<T>, Theme, Breakpoints>({
    cssProp: 'placeItems',
    prop: 'style$PlaceItems',
    themeProp,
  });
