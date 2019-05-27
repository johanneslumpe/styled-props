import { BackgroundBlendModeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundBlendModeProps<T> {
  /**
   * The **`background-blend-mode`** CSS property sets how an element's background images should blend with each other and with the element's background color.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-blend-mode
   */
  style$BackgroundBlendMode: T;
}

export const backgroundBlendMode = <
  T = BackgroundBlendModeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundBlendModeProps<T>, Theme>> = {}) =>
  style<BackgroundBlendModeProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundBlendMode',
    prop: 'style$BackgroundBlendMode',
    themeProp,
  });
