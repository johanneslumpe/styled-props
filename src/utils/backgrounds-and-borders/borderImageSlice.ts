import { BorderImageSliceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageSliceProps<T> {
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  style$BorderImageSlice: T;
}

export const borderImageSlice = <
  T = BorderImageSliceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageSliceProps<T>, Theme>> = {}) =>
  style<BorderImageSliceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSlice',
    prop: 'style$BorderImageSlice',
    themeProp,
  });
