import { BackfaceVisibilityPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IBackfaceVisibilityProps<T> {
  /**
   * The **`backface-visibility`** CSS property sets whether the back face of an element is visible when turned towards the user.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/backface-visibility
   */
  backfaceVisibility: T;
}

export const backfaceVisibility = <
  T = BackfaceVisibilityPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IBackfaceVisibilityProps<T>, Theme>> = {}) =>
  style<IBackfaceVisibilityProps<T>, Theme, Breakpoints>({
    cssProp: 'backfaceVisibility',
    prop: 'backfaceVisibility',
    themeProp,
  });
