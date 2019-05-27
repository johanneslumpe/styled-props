import { ClearPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface ClearProps<T> {
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  style$Clear: T;
}

export const clear = <
  T = ClearPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<ClearProps<T>, Theme>> = {}) =>
  style<ClearProps<T>, Theme, Breakpoints>({
    cssProp: 'clear',
    prop: 'style$Clear',
    themeProp,
  });
