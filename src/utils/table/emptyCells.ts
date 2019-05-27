import { EmptyCellsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { StyleOptions } from '../../types';

export interface EmptyCellsProps<T> {
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  style$EmptyCells: T;
}

export const emptyCells = <
  T = EmptyCellsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<StyleOptions<EmptyCellsProps<T>, Theme>> = {}) =>
  style<EmptyCellsProps<T>, Theme, Breakpoints>({
    cssProp: 'emptyCells',
    prop: 'style$EmptyCells',
    themeProp,
  });
