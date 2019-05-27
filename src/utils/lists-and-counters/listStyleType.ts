import { ListStyleTypeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ListStyleTypeProps<T> {
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  style$ListStyleType: T;
}

export const listStyleType = <
  T = ListStyleTypeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ListStyleTypeProps<T>, Theme>> = {}) =>
  style<ListStyleTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyleType',
    prop: 'style$ListStyleType',
    themeProp,
  });
