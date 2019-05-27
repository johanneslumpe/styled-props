import { BorderLeftProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderLeftProps<T> {
  /**
   * The **`border-left`** shorthand CSS property set an element's left border.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-left
   */
  style$BorderLeft: T;
}

export const borderLeft = <
  T = BorderLeftProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderLeftProps<T>, Theme>> = {}) =>
  style<BorderLeftProps<T>, Theme, Breakpoints>({
    cssProp: 'borderLeft',
    prop: 'style$BorderLeft',
    themeProp,
  });
