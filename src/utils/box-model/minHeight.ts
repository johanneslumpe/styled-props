import { MinHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinHeightProps<T> {
  /**
   * The **`min-height`** CSS property sets the minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `min-height`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-height
   */
  minHeight: T;
}

export const minHeight = <
  T = MinHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinHeightProps<T>, Theme>> = {}) =>
  style<IMinHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'minHeight',
    prop: 'minHeight',
    themeProp,
  });
