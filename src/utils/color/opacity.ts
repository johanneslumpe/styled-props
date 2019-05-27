import { OpacityProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface OpacityProps<T> {
  /**
   * The **`opacity`** CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  style$Opacity: T;
}

export const opacity = <
  T = OpacityProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<OpacityProps<T>, Theme>> = {}) =>
  style<OpacityProps<T>, Theme, Breakpoints>({
    cssProp: 'opacity',
    prop: 'style$Opacity',
    themeProp,
  });
