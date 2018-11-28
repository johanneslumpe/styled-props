import { BorderBottomWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderBottomWidthProps<T> {
  /**
   * The **`border-bottom-width`** CSS property sets the width of the bottom border of a box.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-bottom-width
   */
  borderBottomWidth: T;
}

export const borderBottomWidth = <
  T = BorderBottomWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderBottomWidthProps<T>, Theme>> = {}) =>
  style<IBorderBottomWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderBottomWidth',
    prop: 'borderBottomWidth',
    themeProp,
  });
