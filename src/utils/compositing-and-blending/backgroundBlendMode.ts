import { BackgroundBlendModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackgroundBlendModeProps<T> {
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  backgroundBlendMode: T;
}

export const backgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackgroundBlendModeProps<T>, Theme>> = {}) =>
  style<IBackgroundBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundBlendMode',
    prop: 'backgroundBlendMode',
    themeProp,
  });
