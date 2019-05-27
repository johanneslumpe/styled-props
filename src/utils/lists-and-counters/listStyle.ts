import { ListStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ListStyleProps<T> {
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  style$ListStyle: T;
}

export const listStyle = <
  T = ListStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ListStyleProps<T>, Theme>> = {}) =>
  style<ListStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyle',
    prop: 'style$ListStyle',
    themeProp,
  });
