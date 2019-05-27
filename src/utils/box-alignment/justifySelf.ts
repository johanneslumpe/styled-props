import { JustifySelfPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface JustifySelfProps<T> {
  /**
   * The CSS **`justify-self`** property set the way a box is justified inside its alignment container along the appropriate axis.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/justify-self
   */
  style$JustifySelf: T;
}

export const justifySelf = <
  T = JustifySelfPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<JustifySelfProps<T>, Theme>> = {}) =>
  style<JustifySelfProps<T>, Theme, Breakpoints>({
    cssProp: 'justifySelf',
    prop: 'style$JustifySelf',
    themeProp,
  });
