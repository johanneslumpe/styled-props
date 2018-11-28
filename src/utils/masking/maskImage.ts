import { MaskImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaskImageProps<T> {
  /**
   * The **`mask-image`** CSS property sets the image that is used as mask layer for an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/mask-image
   */
  maskImage: T;
}

export const maskImage = <
  T = MaskImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaskImageProps<T>, Theme>> = {}) =>
  style<IMaskImageProps<T>, Theme, Breakpoints>({
    cssProp: 'maskImage',
    prop: 'maskImage',
    themeProp,
  });
