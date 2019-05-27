import { BackgroundImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundImageProps<T> {
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  style$BackgroundImage: T;
}

export const backgroundImage = <
  T = BackgroundImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundImageProps<T>, Theme>> = {}) =>
  style<BackgroundImageProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundImage',
    prop: 'style$BackgroundImage',
    themeProp,
  });
