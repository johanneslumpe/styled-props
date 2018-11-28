import { OpacityProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IOpacityProps<T> {
  /**
   * The **`opacity`** CSS property sets the transparency of an element or the degree to which content behind an element is visible.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/opacity
   */
  opacity: T;
}

export const opacity = <
  T = OpacityProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IOpacityProps<T>, Theme>> = {}) =>
  style<IOpacityProps<T>, Theme, Breakpoints>({
    cssProp: 'opacity',
    prop: 'opacity',
    themeProp,
  });
