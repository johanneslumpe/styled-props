import { EmptyCellsPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IEmptyCellsProps<T> {
  /**
   * The **`empty-cells`** CSS property sets whether borders and backgrounds appear around `<table>` cells that have no visible content.
   * 
   * @see https://developer.mozilla.org/docs/Web/CSS/empty-cells
   */
  emptyCells: T;
}

export const emptyCells = <
  T = EmptyCellsPropertyCombined,
  Theme = never,
  Breakpoints = never
>({
  themeProp,
}: Partial<IStyleOptions<IEmptyCellsProps<T>, Theme>> = {}) =>
  style<IEmptyCellsProps<T>, Theme, Breakpoints>({
    cssProp: 'emptyCells',
    prop: 'emptyCells',
    themeProp,
  });
