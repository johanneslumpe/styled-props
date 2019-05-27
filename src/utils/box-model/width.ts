import { WidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface WidthProps<T> {
  /**
   * The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/width
   */
  style$Width: T;
}

export const width = <
  T = WidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<WidthProps<T>, Theme>> = {}) =>
  style<WidthProps<T>, Theme, Breakpoints>({
    cssProp: 'width',
    prop: 'style$Width',
    themeProp,
  });
