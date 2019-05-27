import { TouchActionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface TouchActionProps<T> {
  /**
   * The **`touch-action`** CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  style$TouchAction: T;
}

export const touchAction = <
  T = TouchActionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<TouchActionProps<T>, Theme>> = {}) =>
  style<TouchActionProps<T>, Theme, Breakpoints>({
    cssProp: 'touchAction',
    prop: 'style$TouchAction',
    themeProp,
  });
