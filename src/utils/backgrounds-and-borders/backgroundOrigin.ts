import { BackgroundOriginProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundOriginProps<T> {
  /**
   * The **`background-origin`** CSS property sets the _background positioning area_. In other words, it sets the origin position of an image set with the `background-image` property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-origin
   */
  backgroundOrigin: T;
}

export const backgroundOrigin = <
  T = BackgroundOriginProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundOriginProps<T>, Theme>> = {}) =>
  style<IBackgroundOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundOrigin',
    prop: 'backgroundOrigin',
    themeProp,
  });
