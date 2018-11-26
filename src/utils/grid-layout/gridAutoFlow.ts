import { GridAutoFlowPropertyCombined } from '@johanneslumpe/css-types';

import { style } from '../../style';
import { IStyleOptions } from '../../types';

export interface IGridAutoFlowProps<T> {
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
