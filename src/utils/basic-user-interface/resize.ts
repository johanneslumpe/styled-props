import { ResizePropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IResizeProps<T> {
  /**
   * The **`resize`** CSS property sets whether an element is resizable, and if so, in which directions.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/resize
   */
  resize: T;
}

export const resize = <
  T = ResizePropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IResizeProps<T>, Theme>> = {}) =>
  style<IResizeProps<T>, Theme, Breakpoints>({
    cssProp: 'resize',
    prop: 'resize',
    themeProp,
  });
