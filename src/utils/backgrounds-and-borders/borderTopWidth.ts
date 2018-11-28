import { BorderTopWidthProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderTopWidthProps<T> {
  /**
   * The **`border-top-width`** CSS property sets the width of the top border of an element.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-top-width
   */
  borderTopWidth: T;
}

export const borderTopWidth = <
  T = BorderTopWidthProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderTopWidthProps<T>, Theme>> = {}) =>
  style<IBorderTopWidthProps<T>, Theme, Breakpoints>({
    cssProp: 'borderTopWidth',
    prop: 'borderTopWidth',
    themeProp,
  });
