import { MinBlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface MinBlockSizeProps<T> {
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  style$MinBlockSize: T;
}

export const minBlockSize = <
  T = MinBlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<MinBlockSizeProps<T>, Theme>> = {}) =>
  style<MinBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'minBlockSize',
    prop: 'style$MinBlockSize',
    themeProp,
  });
