import { BorderWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderWidthProps<T> {
  /**
   * The **`border-width`** shorthand CSS property sets the width of an element's border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-width
   */
  style$BorderWidth: T;
}

export const borderWidth = <
  T = BorderWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderWidthProps<T>, Theme>> = {}) =>
  style<BorderWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderWidth',
    prop: 'style$BorderWidth',
    themeProp,
  });
