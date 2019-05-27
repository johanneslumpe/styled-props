import { PerspectiveOriginPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface PerspectiveOriginProps<T> {
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  style$PerspectiveOrigin: T;
}

export const perspectiveOrigin = <
  T = PerspectiveOriginPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<PerspectiveOriginProps<T>, Theme>> = {}) =>
  style<PerspectiveOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'perspectiveOrigin',
    prop: 'style$PerspectiveOrigin',
    themeProp,
  });
