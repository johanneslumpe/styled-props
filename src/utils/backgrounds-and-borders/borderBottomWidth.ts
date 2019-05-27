import { BorderBottomWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderBottomWidthProps<T> {
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  style$BorderBottomWidth: T;
}

export const borderBottomWidth = <
  T = BorderBottomWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderBottomWidthProps<T>, Theme>> = {}) =>
  style<BorderBottomWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomWidth',
    prop: 'style$BorderBottomWidth',
    themeProp,
  });
