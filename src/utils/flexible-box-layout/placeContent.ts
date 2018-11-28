import { PlaceContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPlaceContentProps<T> {
  /**
   * The `**place-content**` CSS property is a shorthand for `align-content` and `justify-content`. It can be used in any layout method which utilizes both us these alignment values.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/place-content
   */
  placeContent: T;
}

export const placeContent = <
  T = PlaceContentPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPlaceContentProps<T>, Theme>> = {}) =>
  style<IPlaceContentProps<T>, Theme, Breakpoints>({
    cssProp: 'placeContent',
    prop: 'placeContent',
    themeProp,
  });
