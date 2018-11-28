import { BorderSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBorderSpacingProps<T> {
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  borderSpacing: T;
}

export const borderSpacing = <
  T = BorderSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBorderSpacingProps<T>, Theme>> = {}) =>
  style<IBorderSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'borderSpacing',
    prop: 'borderSpacing',
    themeProp,
  });
