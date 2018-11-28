import { ListStyleTypeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStyleTypeProps<T> {
  /**
   * The **`list-style-type`** CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style-type
   */
  listStyleType: T;
}

export const listStyleType = <
  T = ListStyleTypeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStyleTypeProps<T>, Theme>> = {}) =>
  style<IListStyleTypeProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyleType',
    prop: 'listStyleType',
    themeProp,
  });
