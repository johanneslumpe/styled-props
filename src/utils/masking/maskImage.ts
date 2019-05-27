import { MaskImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaskImageProps<T> {
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  style$MaskImage: T;
}

export const maskImage = <
  T = MaskImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaskImageProps<T>, Theme>> = {}) =>
  style<MaskImageProps<T>, Theme, Breakpoints>({
    cssProp: 'maskImage',
    prop: 'style$MaskImage',
    themeProp,
  });
