import { BoxSizingPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBoxSizingProps<T> {
  /**
   * The **`box-sizing`** CSS property defines how the user agent should calculate the total width and height of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/box-sizing
   */
  boxSizing: T;
}

export const boxSizing = <
  T = BoxSizingPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBoxSizingProps<T>, Theme>> = {}) =>
  style<IBoxSizingProps<T>, Theme, Breakpoints>({
    cssProp: 'boxSizing',
    prop: 'boxSizing',
    themeProp,
  });
