import { BackgroundOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundOriginProps<T> {
  /**
   * The **`background-origin`** CSS property sets the background's origin: from the border start, inside the border, or inside the padding.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  style$BackgroundOrigin: T;
}

export const backgroundOrigin = <
  T = BackgroundOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundOriginProps<T>, Theme>> = {}) =>
  style<BackgroundOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundOrigin',
    prop: 'style$BackgroundOrigin',
    themeProp,
  });
