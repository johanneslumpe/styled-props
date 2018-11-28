import { BorderImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderImageProps<T> {
  /**
   * The **`border-image`** CSS property draws an image in place of an element's `border-style`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image
   */
  borderImage: T;
}

export const borderImage = <
  T = BorderImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderImageProps<T>, Theme>> = {}) =>
  style<IBorderImageProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImage',
    prop: 'borderImage',
    themeProp,
  });
