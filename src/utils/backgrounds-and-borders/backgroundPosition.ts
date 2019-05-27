import { BackgroundPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundPositionProps<T> {
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  style$BackgroundPosition: T;
}

export const backgroundPosition = <
  T = BackgroundPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundPositionProps<T>, Theme>> = {}) =>
  style<BackgroundPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundPosition',
    prop: 'style$BackgroundPosition',
    themeProp,
  });
