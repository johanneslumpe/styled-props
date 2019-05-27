import { BoxSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BoxSizingProps<T> {
  /**
   * The **`box-sizing`** CSS property sets how the total width and height of an element is calculated.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  style$BoxSizing: T;
}

export const boxSizing = <
  T = BoxSizingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BoxSizingProps<T>, Theme>> = {}) =>
  style<BoxSizingProps<T>, Theme, Breakpoints>({
    cssProp: 'boxSizing',
    prop: 'style$BoxSizing',
    themeProp,
  });
