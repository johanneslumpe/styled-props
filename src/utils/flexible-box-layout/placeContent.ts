import { PlaceContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PlaceContentProps<T> {
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both of these alignment values.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  style$PlaceContent: T;
}

export const placeContent = <
  T = PlaceContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PlaceContentProps<T>, Theme>> = {}) =>
  style<PlaceContentProps<T>, Theme, Breakpoints>({
    cssProp: 'placeContent',
    prop: 'style$PlaceContent',
    themeProp,
  });
