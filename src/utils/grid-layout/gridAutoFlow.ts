import { GridAutoFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoFlowProps<T> {
  /**
   * The **`grid-auto-flow`** CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/grid-auto-flow
   */
  gridAutoFlow: T;
}

export const gridAutoFlow = <
  T = GridAutoFlowPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IGridAutoFlowProps<T>, Theme>> = {}) =>
  style<IGridAutoFlowProps<T>, Theme, Breakpoints>({
    cssProp: 'gridAutoFlow',
    prop: 'gridAutoFlow',
    themeProp,
  });
