import { MaxWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaxWidthProps<T> {
  /**
   * The **`max-width`** CSS property sets the maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified by `max-width`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/max-width
   */
  style$MaxWidth: T;
}

export const maxWidth = <
  T = MaxWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaxWidthProps<T>, Theme>> = {}) =>
  style<MaxWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'maxWidth',
    prop: 'style$MaxWidth',
    themeProp,
  });
