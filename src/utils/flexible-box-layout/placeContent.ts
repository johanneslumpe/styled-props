import { PlaceContentPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPlaceContentProps<T> {
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
