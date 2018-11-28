import { HeightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IHeightProps<T> {
  /**
   * The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/height
   */
  height: T;
}

export const height = <
  T = HeightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IHeightProps<T>, Theme>> = {}) =>
  style<IHeightProps<T>, Theme, Breakpoints>({
    cssProp: 'height',
    prop: 'height',
    themeProp,
  });
