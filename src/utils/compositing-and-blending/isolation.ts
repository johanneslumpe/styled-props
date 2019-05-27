import { IsolationPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface IsolationProps<T> {
  /**
   * The **`isolation`** CSS property determines whether an element must create a new stacking context.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/isolation
   */
  style$Isolation: T;
}

export const isolation = <
  T = IsolationPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<IsolationProps<T>, Theme>> = {}) =>
  style<IsolationProps<T>, Theme, Breakpoints>({
    cssProp: 'isolation',
    prop: 'style$Isolation',
    themeProp,
  });
