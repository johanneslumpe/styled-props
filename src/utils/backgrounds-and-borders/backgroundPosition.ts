import { BackgroundPositionProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundPositionProps<T> {
  /**
   * The **`background-position`** CSS property sets the initial position for each background image. The position is relative to the position layer set by `background-origin`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-position
   */
  backgroundPosition: T;
}

export const backgroundPosition = <
  T = BackgroundPositionProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundPositionProps<T>, Theme>> = {}) =>
  style<IBackgroundPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundPosition',
    prop: 'backgroundPosition',
    themeProp,
  });
