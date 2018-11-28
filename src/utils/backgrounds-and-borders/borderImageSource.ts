import { BorderImageSourceProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageSourceProps<T> {
  /**
   * The **`border-image-source`** CSS property sets the source image used to create an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-source
   */
  borderImageSource: T;
}

export const borderImageSource = <
  T = BorderImageSourceProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageSourceProps<T>, Theme>> = {}) =>
  style<IBorderImageSourceProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageSource',
    prop: 'borderImageSource',
    themeProp,
  });
