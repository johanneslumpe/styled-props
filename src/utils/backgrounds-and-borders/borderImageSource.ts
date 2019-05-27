import { BorderImageSourceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageSourceProps<T> {
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  style$BorderImageSource: T;
}

export const borderImageSource = <
  T = BorderImageSourceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageSourceProps<T>, Theme>> = {}) =>
  style<BorderImageSourceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSource',
    prop: 'style$BorderImageSource',
    themeProp,
  });
