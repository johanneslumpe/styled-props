import { BackgroundSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundSizeProps<T> {
  /**
   * The **`background-size`** CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-size
   */
  backgroundSize: T;
}

export const backgroundSize = <
  T = BackgroundSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundSizeProps<T>, Theme>> = {}) =>
  style<IBackgroundSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundSize',
    prop: 'backgroundSize',
    themeProp,
  });
