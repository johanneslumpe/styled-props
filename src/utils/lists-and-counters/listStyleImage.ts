import { ListStyleImageProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ListStyleImageProps<T> {
  /**
   * The **`list-style-image`** CSS property sets an image to be used as the list item marker.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-image
   */
  style$ListStyleImage: T;
}

export const listStyleImage = <
  T = ListStyleImageProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ListStyleImageProps<T>, Theme>> = {}) =>
  style<ListStyleImageProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyleImage',
    prop: 'style$ListStyleImage',
    themeProp,
  });
