import { ClearPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IClearProps<T> {
  /**
   * The **`clear`** CSS property sets whether an element must be moved below (cleared) floating elements that precede it. The `clear` property applies to floating and non-floating elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/clear
   */
  clear: T;
}

export const clear = <
  T = ClearPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IClearProps<T>, Theme>> = {}) =>
  style<IClearProps<T>, Theme, Breakpoints>({
    cssProp: 'clear',
    prop: 'clear',
    themeProp,
  });
