import { BorderRightWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderRightWidthProps<T> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  style$BorderRightWidth: T;
}

export const borderRightWidth = <
  T = BorderRightWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderRightWidthProps<T>, Theme>> = {}) =>
  style<BorderRightWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightWidth',
    prop: 'style$BorderRightWidth',
    themeProp,
  });
