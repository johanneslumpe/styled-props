import { BackgroundImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundImageProps<T> {
  /**
   * The **`background-image`** CSS property sets one or more background images on an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-image
   */
  backgroundImage: T;
}

export const backgroundImage = <
  T = BackgroundImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundImageProps<T>, Theme>> = {}) =>
  style<IBackgroundImageProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundImage',
    prop: 'backgroundImage',
    themeProp,
  });
