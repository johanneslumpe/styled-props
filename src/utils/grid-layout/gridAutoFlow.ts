import { GridAutoFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface GridAutoFlowProps<T> {
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  style$GridAutoFlow: T;
}

export const gridAutoFlow = <
  T = GridAutoFlowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<GridAutoFlowProps<T>, Theme>> = {}) =>
  style<GridAutoFlowProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoFlow',
    prop: 'style$GridAutoFlow',
    themeProp,
  });
