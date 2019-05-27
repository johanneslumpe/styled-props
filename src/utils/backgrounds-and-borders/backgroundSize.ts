import { BackgroundSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundSizeProps<T> {
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  style$BackgroundSize: T;
}

export const backgroundSize = <
  T = BackgroundSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundSizeProps<T>, Theme>> = {}) =>
  style<BackgroundSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundSize',
    prop: 'style$BackgroundSize',
    themeProp,
  });
