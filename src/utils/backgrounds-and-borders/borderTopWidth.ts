import { BorderTopWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderTopWidthProps<T> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  style$BorderTopWidth: T;
}

export const borderTopWidth = <
  T = BorderTopWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderTopWidthProps<T>, Theme>> = {}) =>
  style<BorderTopWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopWidth',
    prop: 'style$BorderTopWidth',
    themeProp,
  });
