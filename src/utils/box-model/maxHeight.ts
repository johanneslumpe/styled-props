import { MaxHeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMaxHeightProps<T> {
  /**
   * The **`max-height`** CSS property sets the maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `max-height`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/max-height
   */
  maxHeight: T;
}

export const maxHeight = <
  T = MaxHeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMaxHeightProps<T>, Theme>> = {}) =>
  style<IMaxHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'maxHeight',
    prop: 'maxHeight',
    themeProp,
  });
