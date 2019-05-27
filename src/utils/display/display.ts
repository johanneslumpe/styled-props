import { DisplayPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface DisplayProps<T> {
  /**
   * The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as grid or flex.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/display
   */
  style$Display: T;
}

export const display = <
  T = DisplayPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<DisplayProps<T>, Theme>> = {}) =>
  style<DisplayProps<T>, Theme, Breakpoints>({
    cssProp: 'display',
    prop: 'style$Display',
    themeProp,
  });
