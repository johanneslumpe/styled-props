import { BorderImageSliceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageSliceProps<T> {
  /**
   * The **`border-image-slice`** CSS property divides the image specified by `border-image-source` into regions. These regions form the components of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-slice
   */
  borderImageSlice: T;
}

export const borderImageSlice = <
  T = BorderImageSliceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageSliceProps<T>, Theme>> = {}) =>
  style<IBorderImageSliceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSlice',
    prop: 'borderImageSlice',
    themeProp,
  });
