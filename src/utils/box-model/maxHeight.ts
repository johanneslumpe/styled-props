import { MaxHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MaxHeightProps<T> {
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  style$MaxHeight: T;
}

export const maxHeight = <
  T = MaxHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MaxHeightProps<T>, Theme>> = {}) =>
  style<MaxHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'maxHeight',
    prop: 'style$MaxHeight',
    themeProp,
  });
