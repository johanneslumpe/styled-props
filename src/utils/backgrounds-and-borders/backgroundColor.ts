import { BackgroundColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackgroundColorProps<T> {
  /**
   * The **`background-color`** CSS property sets the background color of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/background-color
   */
  style$BackgroundColor: T;
}

export const backgroundColor = <
  T = BackgroundColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackgroundColorProps<T>, Theme>> = {}) =>
  style<BackgroundColorProps<T>, Theme, Breakpoints>({
    cssProp: 'backgroundColor',
    prop: 'style$BackgroundColor',
    themeProp,
  });
