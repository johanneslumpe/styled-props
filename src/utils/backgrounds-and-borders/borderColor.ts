import { BorderColorProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderColorProps<T> {
  /**
   * The **`border-color`** shorthand CSS property sets the color of an element's border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-color
   */
  style$BorderColor: T;
}

export const borderColor = <
  T = BorderColorProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderColorProps<T>, Theme>> = {}) =>
  style<BorderColorProps<T>, Theme, Breakpoints>({
    cssProp: 'borderColor',
    prop: 'style$BorderColor',
    themeProp,
  });
