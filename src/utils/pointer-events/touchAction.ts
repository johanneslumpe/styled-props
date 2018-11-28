import { TouchActionPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface ITouchActionProps<T> {
  /**
   * The **`touch-action`** CSS property sets how a region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/touch-action
   */
  touchAction: T;
}

export const touchAction = <
  T = TouchActionPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<ITouchActionProps<T>, Theme>> = {}) =>
  style<ITouchActionProps<T>, Theme, Breakpoints>({
    cssProp: 'touchAction',
    prop: 'touchAction',
    themeProp,
  });
