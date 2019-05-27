import { MinWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MinWidthProps<T> {
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  style$MinWidth: T;
}

export const minWidth = <
  T = MinWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MinWidthProps<T>, Theme>> = {}) =>
  style<MinWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'minWidth',
    prop: 'style$MinWidth',
    themeProp,
  });
