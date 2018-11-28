import { MarginRightProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginRightProps<T> {
  /**
   * The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-right
   */
  marginRight: T;
}

export const marginRight = <
  T = MarginRightProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginRightProps<T>, Theme>> = {}) =>
  style<IMarginRightProps<T>, Theme, Breakpoints>({
    cssProp: 'marginRight',
    prop: 'marginRight',
    themeProp,
  });
