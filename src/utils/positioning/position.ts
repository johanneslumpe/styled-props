import { PositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PositionProps<T> {
  /**
   * The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  style$Position: T;
}

export const position = <
  T = PositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PositionProps<T>, Theme>> = {}) =>
  style<PositionProps<T>, Theme, Breakpoints>({
    cssProp: 'position',
    prop: 'style$Position',
    themeProp,
  });
