import { PositionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPositionProps<T> {
  /**
   * The **`position`** CSS property specifies how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/position
   */
  position: T;
}

export const position = <
  T = PositionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPositionProps<T>, Theme>> = {}) =>
  style<IPositionProps<T>, Theme, Breakpoints>({
    cssProp: 'position',
    prop: 'position',
    themeProp,
  });
