import { BorderImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageProps<T> {
  /**
   * The **`border-image`** CSS property draws an image in place of an element's `border-style`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  style$BorderImage: T;
}

export const borderImage = <
  T = BorderImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageProps<T>, Theme>> = {}) =>
  style<BorderImageProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImage',
    prop: 'style$BorderImage',
    themeProp,
  });
