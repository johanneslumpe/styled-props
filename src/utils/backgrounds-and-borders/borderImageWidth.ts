import { BorderImageWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderImageWidthProps<T> {
  /**
   * The **`border-image-width`** CSS property sets the width of an element's border image.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-image-width
   */
  style$BorderImageWidth: T;
}

export const borderImageWidth = <
  T = BorderImageWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderImageWidthProps<T>, Theme>> = {}) =>
  style<BorderImageWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderImageWidth',
    prop: 'style$BorderImageWidth',
    themeProp,
  });
