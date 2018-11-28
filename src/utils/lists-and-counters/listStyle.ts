import { ListStyleProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IListStyleProps<T> {
  /**
   * The **`list-style`** CSS property is a shorthand to set list style properties `list-style-type`, `list-style-image`, and `list-style-position`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/list-style
   */
  listStyle: T;
}

export const listStyle = <
  T = ListStyleProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IListStyleProps<T>, Theme>> = {}) =>
  style<IListStyleProps<T>, Theme, Breakpoints>({
    cssProp: 'listStyle',
    prop: 'listStyle',
    themeProp,
  });
