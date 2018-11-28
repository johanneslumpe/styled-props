import { MinWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMinWidthProps<T> {
  /**
   * The **`min-width`** CSS property sets the minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `min-width`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/min-width
   */
  minWidth: T;
}

export const minWidth = <
  T = MinWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMinWidthProps<T>, Theme>> = {}) =>
  style<IMinWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'minWidth',
    prop: 'minWidth',
    themeProp,
  });
