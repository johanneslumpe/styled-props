import { MinBlockSizeProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinBlockSizeProps<T> {
  /**
   * The **`min-block-size`** CSS property defines the minimum horizontal or vertical size of an element's block, depending on its writing mode. It corresponds to either the `min-width` or the `min-height` property, depending on the value of `writing-mode`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-block-size
   */
  minBlockSize: T;
}

export const minBlockSize = <
  T = MinBlockSizeProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinBlockSizeProps<T>, Theme>> = {}) =>
  style<IMinBlockSizeProps<T>, Theme, Breakpoints>({
    cssProp: 'minBlockSize',
    prop: 'minBlockSize',
    themeProp,
  });
