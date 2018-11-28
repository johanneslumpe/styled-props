import { BackgroundRepeatProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundRepeatProps<T> {
  /**
   * The **`background-repeat`** CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-repeat
   */
  backgroundRepeat: T;
}

export const backgroundRepeat = <
  T = BackgroundRepeatProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundRepeatProps<T>, Theme>> = {}) =>
  style<IBackgroundRepeatProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundRepeat',
    prop: 'backgroundRepeat',
    themeProp,
  });
