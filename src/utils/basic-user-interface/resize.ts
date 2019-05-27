import { ResizePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ResizeProps<T> {
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  style$Resize: T;
}

export const resize = <
  T = ResizePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ResizeProps<T>, Theme>> = {}) =>
  style<ResizeProps<T>, Theme, Breakpoints>({
    cssProp: 'resize',
    prop: 'style$Resize',
    themeProp,
  });
