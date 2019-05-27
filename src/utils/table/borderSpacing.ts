import { BorderSpacingProperty } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BorderSpacingProps<T> {
  /**
   * The **`border-spacing`** CSS property sets the distance between the borders of adjacent `<table>` cells. This property applies only when `border-collapse` is `separate`.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/border-spacing
   */
  style$BorderSpacing: T;
}

export const borderSpacing = <
  T = BorderSpacingProperty,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BorderSpacingProps<T>, Theme>> = {}) =>
  style<BorderSpacingProps<T>, Theme, Breakpoints>({
    cssProp: 'borderSpacing',
    prop: 'style$BorderSpacing',
    themeProp,
  });
