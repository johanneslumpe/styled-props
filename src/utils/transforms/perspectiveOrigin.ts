import { PerspectiveOriginPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IPerspectiveOriginProps<T> {
  /**
   * The **`perspective-origin`** CSS property determines the position at which the viewer is looking. It is used as the _vanishing point_ by the `perspective` property.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/perspective-origin
   */
  perspectiveOrigin: T;
}

export const perspectiveOrigin = <
  T = PerspectiveOriginPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IPerspectiveOriginProps<T>, Theme>> = {}) =>
  style<IPerspectiveOriginProps<T>, Theme, Breakpoints>({
    cssProp: 'perspectiveOrigin',
    prop: 'perspectiveOrigin',
    themeProp,
  });
