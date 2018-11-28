import { BorderRightWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderRightWidthProps<T> {
  /**
   * The **`border-right-width`** CSS property sets the width of the right border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-right-width
   */
  borderRightWidth: T;
}

export const borderRightWidth = <
  T = BorderRightWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderRightWidthProps<T>, Theme>> = {}) =>
  style<IBorderRightWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderRightWidth',
    prop: 'borderRightWidth',
    themeProp,
  });
