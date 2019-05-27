import { MinHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MinHeightProps<T> {
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  style$MinHeight: T;
}

export const minHeight = <
  T = MinHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MinHeightProps<T>, Theme>> = {}) =>
  style<MinHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'minHeight',
    prop: 'style$MinHeight',
    themeProp,
  });
