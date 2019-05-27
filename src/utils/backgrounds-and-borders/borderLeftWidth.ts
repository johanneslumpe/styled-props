import { BorderLeftWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderLeftWidthProps<T> {
  /**
   * The **`border-left-width`** CSS property sets the width of the left border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left-width
   */
  style$BorderLeftWidth: T;
}

export const borderLeftWidth = <
  T = BorderLeftWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderLeftWidthProps<T>, Theme>> = {}) =>
  style<BorderLeftWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeftWidth',
    prop: 'style$BorderLeftWidth',
    themeProp,
  });
