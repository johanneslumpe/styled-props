import { MarginLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IMarginLeftProps<T> {
  /**
   * The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/margin-left
   */
  marginLeft: T;
}

export const marginLeft = <
  T = MarginLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IMarginLeftProps<T>, Theme>> = {}) =>
  style<IMarginLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'marginLeft',
    prop: 'marginLeft',
    themeProp,
  });
