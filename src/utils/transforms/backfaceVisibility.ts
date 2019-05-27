import { BackfaceVisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface BackfaceVisibilityProps<T> {
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  style$BackfaceVisibility: T;
}

export const backfaceVisibility = <
  T = BackfaceVisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<BackfaceVisibilityProps<T>, Theme>> = {}) =>
  style<BackfaceVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'backfaceVisibility',
    prop: 'style$BackfaceVisibility',
    themeProp,
  });
