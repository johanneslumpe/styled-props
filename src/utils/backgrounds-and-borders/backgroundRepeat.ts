import { BackgroundRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundRepeatProps<T> {
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  style$BackgroundRepeat: T;
}

export const backgroundRepeat = <
  T = BackgroundRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundRepeatProps<T>, Theme>> = {}) =>
  style<BackgroundRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundRepeat',
    prop: 'style$BackgroundRepeat',
    themeProp,
  });
